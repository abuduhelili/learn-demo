//
// 1.渲染：+获取数据+渲染数据
const creator = 'helili'; // 唯一外号
// 获取并渲染图书列表
function getBookList() {
  // 获取数据
  axios({
    url: 'https://hmajax.itheima.net/api/books',
    method: 'get',
    params: {
      creator,
    },
  })
    .then(res => {
      // 渲染数据
      console.log(res.data.message);
      const bookList = res.data.data;
      console.log(bookList);
      const htmlStr = bookList
        .map((book, index) => {
          return `<tr>
          <th>${index + 1}</th>
          <td>${book.bookname}</td>
          <td>${book.author}</td>
          <td>${book.publisher}</td>
          <td data-id = '${book.id}'>
            <span class="del  text-danger" role="button">删除</span>
            <span class="edit text-primary ms-3" role="button">编辑</span>
          </td>
        </tr>`;
        })
        .join('');
      // console.log(htmlStr);s
      document.querySelector('.book-list').innerHTML = htmlStr;
    })
    .catch(err => {
      console.log(err);
    });
}
getBookList(); // 网页加载运行，获取渲染一次

// 2.增：+新增弹窗 显示 隐藏 +收集表单数据，提交到服务器 +刷新图书列表
// 创建弹窗对象
const addModalDom = document.querySelector('.addBookModal');
const addModal = new bootstrap.Modal(addModalDom);
// 点击事件-保存
document.querySelector('.saveBtn').addEventListener('click', () => {
  // 获取图书信息
  const bookname = document.querySelector('input.bookName').value;
  const author = document.querySelector('input.bookAuthor').value;
  const publisher = document.querySelector('input.bookPublisher').value;
  // 获取表单
  const addForm = document.querySelector('.add-form');
  // console.log(bookName, bookAuthor, bookPublisher);
  // 提交到服务器
  axios({
    method: 'POST',
    url: 'https://hmajax.itheima.net/api/books',
    data: {
      bookname,
      author,
      publisher,
      creator,
    },
  })
    .then(res => {
      console.log(res.data.message);
      // 获取图书列表
      getBookList();
      // 重置表单
      addForm.reset();
      // 隐藏
      addModal.hide();
      // console.log('1');
    })
    .catch();
});

// 3.删: +绑定删除事件，获取图书id +调用删除接口 +刷新列表

document.querySelector('.book-list').addEventListener('click', e => {
  if (e.target.classList.contains('del')) {
    console.log(e.target);
    let id = e.target.parentNode.dataset.id;
    // console.log(id);
    // 调用删除接口
    axios({
      method: 'DELETE',
      url: `https://hmajax.itheima.net/api/books/${id}`,
    })
      .then(res => {
        console.log(res.data.message);
        console.log(res.data.data.id);
        // 刷新
        getBookList();
      })
      .catch(err => {
        console.log(err.data.message);
      });
  }
});

// 4.改: +弹窗 +显示已有信息 +保存信息 +传递新的信息
// 创建编辑弹窗对象
const editModalDom = document.querySelector('.editBookModal');
const editModal = new bootstrap.Modal(editModalDom);
// 点击事件-编辑-事件委托-数据回显
document.querySelector('.book-list').addEventListener('click', e => {
  console.log(e.target);
  if (e.target.classList.contains('edit')) {
    let id = e.target.parentNode.dataset.id;
    // console.log(id);
    // 调用修改接口
    axios({
      url: `https://hmajax.itheima.net/api/books/${id}`,
    })
      .then(res => {
        const bookObj = res.data.data;
        console.log(bookObj);
        document.querySelector('.edit-form .id').value = bookObj.id;
        document.querySelector('.edit-form .bookName').value = bookObj.bookname;
        document.querySelector('.edit-form .bookAuthor').value = bookObj.author;
        document.querySelector('.edit-form .bookPublisher').value =
          bookObj.publisher;
      })
      .catch(err => {
        console.log(err.data.message);
      });
    editModal.show();
  }
});
// 点击事件-修改-提交数据-刷新列表
document.querySelector('.editBtn').addEventListener('click', () => {
  // 提取
  let id = document.querySelector('.edit-form .id').value;
  let bookname = document.querySelector('.edit-form .bookName').value;
  let author = document.querySelector('.edit-form .bookAuthor').value;
  let publisher = document.querySelector('.edit-form .bookPublisher').value;
  console.log(bookname, author, publisher, id);
  // 提交
  axios({
    method: 'PUT',
    url: `https://hmajax.itheima.net/api/books/${id}`,
    data: {
      bookname,
      author,
      publisher,
      creator,
    },
  })
    .then(res => {
      // 刷新列表
      getBookList();
      // 隐藏
      editModal.hide();
      // 结果
      console.log(res.data.message);
    })
    .catch(err => {
      console.log(err.data.message);
    });
});

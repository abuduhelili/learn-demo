var s = "III";
var romanToInt = function (s) {
  var arr = s.split("");
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // I
    if ((arr[i] = "I")) {
      if (arr[i + 1] === "V") {
        sum += 4;
        i++;
      } else if (arr[i + 1] === "X") {
        sum += 9;
        i++;
      } else {
        sum += 1;
      }
    } else if ((arr[i] = "V")) {
      sum += 5;
    } else if ((arr[i] = "X")) {
      if (arr[i + 1] === "L") {
        sum += 40;
        i++;
      } else if (arr[i + 1] === "C") {
        sum += 90;
        i++;
      } else {
        sum += 10;
      }
    } else if ((arr[i] = "L")) {
      sum += 50;
    } else if ((arr[i] = "C")) {
      if (arr[i + 1] === "V") {
        sum += 400;
        i++;
      } else if (arr[i + 1] === "X") {
        sum += 900;
        i++;
      } else {
        sum += 100;
      }
    } else if ((arr[i] = "D")) {
      sum += 500;
    }
    // M
    else if ((arr[i] = "M")) {
      sum += 1000;
    }
  }
  return sum;
  // return
};

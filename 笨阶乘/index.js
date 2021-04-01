/**
 * @param {number} N
 * @return {number}
 */


//  输入：10
//  输出：12
//  解释：12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

var clumsy = function (N) {
  let sum = 0;
  if (N == 3) {
    sum = 6;
  } else if (N == 2) {
    sum = 2;
  } else if (N == 1) {
    sum = 1;
  } else if (N >= 4) {
    sum = Math.floor(N * (N - 1) / (N - 2)) + (N - 3);
    for (let n = N - 4; n > 0;) {
      if (n >= 4) {
        sum -= Math.floor(n * (n - 1) / (n - 2)) - (n - 3);
      } else if (n == 3) {
        sum = sum - 6;
      } else if (n == 2) {
        sum = sum - 2;
      } else if (n == 1) {
        sum = sum - 1;
      }
      n = n - 4;
    }
  }
  return sum;
};

clumsy(10);
/**
 * @author:zc
 * @description: 用最少数量的箭引爆气球
 * */


/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function(points) {
  if (!points.length ) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);
  console.log("points",points)
  let pos = points[0][1]
  let ans = 1;
  for (let balloon of points) {
      if (balloon[0] > pos) {
          pos = balloon[1];
          ans++;
      }
  }
  return ans
};

let points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]];
points = [[10,16],[2,8],[1,6],[7,12]]

findMinArrowShots(points)
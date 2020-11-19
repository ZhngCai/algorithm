/**
 * @author:zc
 * @description: 移动零
 * */


 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  //速度快
  // let i = 0;
  // function moveFun(params) {
  //   let n = nums.indexOf(0)
  //   if(n > -1){
  //     nums.splice(n,1);
  //     i++;
  //     moveFun(nums);
  //   }
  // }
  // moveFun(nums)
  // for (let index = 0; index < i; index++) {
  //   nums.push(0)
  // }

  //简便
  for (let i = nums.length ; i --;) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
let arr = [0,1,0,3,12];
moveZeroes(arr)
console.log(arr)
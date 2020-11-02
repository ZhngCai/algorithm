/**
 * @author:zc
 * @description: 两个数组的交集
 *
 * */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let nums1 = [1,2,2,1], nums2 = [2,2]
var intersection = function(nums1, nums2) {
  let arr = [];
    nums1.map((val)=>{
      if(nums2.indexOf(val)>-1&&arr.indexOf(val)<0){
          arr.push(val)
      }
    })
    return arr;
};

// var intersection = function(nums1, nums2) {
//   return nums1.reduce((total, currentValue)=>{
//    if(nums2.indexOf(currentValue)>-1&&total.indexOf(currentValue)<0){
//      total.push(currentValue)
//    }
//      return total
//    },[])
// };


console.log(intersection(nums1,nums2));
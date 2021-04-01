/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 时间复杂度为 O(log (m+n))
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr1 = [...nums1],
    arr2 = [...nums2];
  let leng = nums1.length + nums2.length,
    arr = [],
    sum = 0;
  leng % 2 == 1 ? arr = [(leng + 1) / 2] : arr = [leng / 2, leng / 2 + 1];
  let index = 0;
  while (index < arr[0]) {
    if (arr1.length == 0) {
      sum = arr2.shift();
    } else if (arr2.length == 0) {
      sum = arr1.shift();
    } else if (arr1[0] < arr2[0]) {
      sum = arr1.shift();
    } else {
      sum = arr2.shift()
    }
    index++;
  }

  if (arr.length == 1) {
    return sum;
  } else {
    if (arr1.length == 0) {
      sum += arr2.shift();
    } else if (arr2.length == 0) {
      sum += arr1.shift();
    } else if (arr1[0] < arr2[0]) {
      sum += arr1.shift();
    } else {
      sum += arr2.shift()
    }
    return sum / 2;
  }
};

let nums1 = [3, 3],
  nums2 = [3, 3];
findMedianSortedArrays(nums1, nums2)
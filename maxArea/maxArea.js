/**
 * @author:zc
 * 盛最多水的容器
 * @description: 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器，且 n 的值至少为 2。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */


/**
 * @param {number[]} height
 * @return {number}
 */
var a=[1,8,6,2,5,4,8,3,7]


var maxArea = function(height) {
  //通常做法
  // let area = 0;
  // for (let i = 0; i < height.length-1; i++) {
  //   for (let j = i+1; j < height.length; j++) {
  //     let area2 = (j-i)*Math.min(height[j],height[i]);
  //     if(area<area2){
  //         area = area2
  //     }
  //   }
  // }
  // return area;

  //进阶做法
  let max = 0;
  for(let i = 0, j = height.length - 1; i < j ; ){
    let minHeight = height[i] < height[j] ? height[i ++] : height[j --];
    max = Math.max(max, (j - i + 1) * minHeight);
  }
	return max;
};

console.log(maxArea(a))

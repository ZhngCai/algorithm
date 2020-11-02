/**
 * @author:zc
 * 股票的最大利润
 * @description: 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */



/**
 * @param {number[]} prices
 * @return {number}
 */

 let prices =  [7,6,4,3,1]
var maxProfit = function(prices) {
  let max = 0;
  prices.reduce((total, currentValue, currentIndex, arr)=>{
    if(currentValue-total<0){
      return currentValue;
    }else{
      max = Math.max(currentValue-total,max)
      return total;
    }
  },prices[0])
  return max;
};

console.log(maxProfit(prices))
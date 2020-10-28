/**
 * @author:zc
 * @description: 电话号码的字母组合
 *
 * */

 /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let json = {
      '1':['!','@','#'],
      '2':['a','b','c'],
      '3':['d','e','f'],
      '4':['g','h','i'],
      '5':['j','k','l'],
      '6':['m','n','o'],
      '7':['p','q','r','s'],
      '8':['t','u','v'],
      '9':['w','x','y','z'],
      '0':['_']
    }
    let numArr = digits.split("");
    let outArr = numArr.reduce((total, currentValue, currentIndex, arr)=>{
      return arrMult(total,json[currentValue])
    },[])
    return outArr
};

function arrMult(arr1,arr2){
  let arrResult = [];
  if(arr1.length<1){
    arrResult=arr2;
  }
  if(arr2.length<1){
    arrResult=arr1;
  }
  arr1.map((val1)=>{
    arr2.map((val2)=>{
      arrResult.push(val1+val2)
    })
  })
  return arrResult
}

console.log(letterCombinations(""))
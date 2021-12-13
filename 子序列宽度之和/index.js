/**
 * 给定一个整数数组 A ，考虑 A 的所有非空子序列。

对于任意序列 S ，设 S 的宽度是 S 的最大元素和最小元素的差。

返回 A 的所有子序列的宽度之和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumSubseqWidths = function(nums) {
    let sum=0,leg = nums.length,n=2;
    
    while(n<=leg){
        nums.map((item,index)=>{
            let max = item,min=item;
            let bArr = JSON.parse(JSON.stringify(nums));
            bArr.splice(0,index+1);
            fn(bArr,min,max,2);
        })
        n++;
    }
    function fn(arr,min,max,num){
        arr.map((item,index)=>{
            let _min = min , _max = max;
            if(item<min){
                _min = item;
            }
            if(item>max){
                _max = item
            }
            if(num<n){
                let bArr = JSON.parse(JSON.stringify(arr));
                bArr.splice(0,index+1);
                if(bArr.length>0){
                    fn(bArr,_min,_max,num+1)
                }
            }else{
                sum += _max-_min;
            }
        })
    }
    return sum;
};




var sumSubseqWidths = function(nums) {
    let sum=0,leg = nums.length;
    const mod = 1000000007;
    nums.sort((a,b)=>a - b);


    for(let i = 0;i<leg;i++){
        sum += nums[i]*(Math.pow(2,i)- Math.pow(2,leg-i-1));
    }
    return sum%mod;
};
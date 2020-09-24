var decompressRLElist = function(nums) {
    let len = nums.length;
    let arr = [];
    for(let i = 0; i<len; i+=2) {
        let s = 0
        while(s < nums[i]) {
            s++;
            arr.push(nums[i+1])
        }
    }
    
    return arr;
};


var decompressRLElist = function(nums, i = 1) {
    return (i >= nums.length) ? [] : new Array(nums[i-1]).fill(nums[i]).concat(decompressRLElist(nums, i + 2));
};
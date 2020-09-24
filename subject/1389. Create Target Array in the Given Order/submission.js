var createTargetArray = function(nums, index) {
    let arr = [];
    index.forEach( (e, i) => arr.splice(e,0,nums[i]))
    return arr
};
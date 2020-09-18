var twoSum = function(nums, target) {
    let arr = [];
    for(let i = 0; i<nums.length;i++) {
        for (let s = i+1; s<nums.length;s++){
            if (nums[s] + nums[i] === target) {
				arr = [i,s]
            }
        }
    }
    return arr;
};

var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};

twoSum([0,4,3,0],0)

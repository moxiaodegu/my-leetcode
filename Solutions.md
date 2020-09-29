# Index
  1. [Two Sum](#two-sum)
  2. [XOR Operation in an Array](#xor-operation-in-an-array)

  ------------------------------------------------------------

### [XOR Operation in an Array](https://leetcode.com/problems/xor-operation-in-an-array/)<a name="xor-operation-in-an-array"></a>
<strong>Given an integer n and an integer start.Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.Return the bitwise XOR of all elements of nums.</strong>
  
```javascript
  var xorOperation = function(n, start) {
    let xor;
    for(let i = 0; i< n; i++) {
        xor ^= start + i * 2
    }
    return xor
};
```

### [Two Sum](https://leetcode.com/problems/two-sum/)<a name="two-sum"></a>

<strong>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.</strong>

```javascript
/**
 * @param {number[]} 
 * @return {number}
 */
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
```
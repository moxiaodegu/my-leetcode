# Index
  1. [Two Sum](#two-sum)
  2. [XOR Operation in an Array](#xor-operation-in-an-array)
  3. [Split a String in Balanced Strings](#split-a-string-in-balanced-strings)
  4. [Detect Capital](#detect-capital)
  5. [Length of Last Word](#length-of-last-word)
  6. [Check If Two String Arrays are Equivalent](#check-if-two-string-arrays-are-equivalent)
  7. [Design Parking System](#design-parking-system)

  ------------------------------------------------------------

### [Design Parking System](https://leetcode.com/problems/design-parking-system/)<a name="design-parking-system"></a>

<strong>Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 </strong>

```javascript
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.spaces = [null,big,medium,small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    return this.spaces[carType]? this.spaces[carType]-- : 0;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
```

### [Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)<a name="check-if-two-string-arrays-are-equivalent"></a>
<strong>Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.A string is represented by an array if the array elements concatenated in order forms the string.</strong>

```javascript
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};
```
### [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)<a name="length-of-last-word"></a>
<strong>Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
If the last word does not exist, return 0.
Note: A word is defined as a maximal substring consisting of non-space characters only.</strong>

```javaScript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s, arr = s.split(' ')) {
    if (!s.trim()) return 0;
    return arr.reverse().find( e => e).length
};
```

### [Detect Capital](https://leetcode.com/problems/detect-capital/)<a name = "#detect-capital"></a>
<strong>Given a word, you need to judge whether the usage of capitals in it is right or not.
We define the usage of capitals in a word to be right when one of the following cases holds:
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.</strong>

```javascript
var detectCapitalUse = function(word) {
    let flag = 0,acc = 0;
    for(let i = 0; i< word.split('').length; i++) {
        if (i === 0 && word[i] === word[i].toUpperCase()) continue;
	    acc ++;
        flag += word[i] === word[i].toUpperCase() ? 1 : -1 ;
    }
    
    return Math.abs(flag) === acc ? true : false;
};

```

### [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/)<a nam="#split-a-string-in-balanced-strings"></a>
<strong>Balanced strings are those who have equal quantity of 'L' and 'R' characters.Given a balanced string s split it in the maximum amount of balanced strings.Return the maximum amount of splitted balanced strings.</strong>

```javascript
1. var balancedStringSplit = function(s) {
    let val = 0, res = 0;
    for (let x of s) {
        x === 'R' ? val++ : val--;
        if (val == 0) {
            res++;
        }
    }
    return res;
  };

2. var balancedStringSplit = function(s) {
   return balancedString(s,0)
 };

function balancedString(str, num, total = null, acc = 0) {
    if (str.length <= num) {
        return acc;
    }
    
    total += str[num] === 'L' ? 1 : -1;

    if (total === 0) {
        acc ++;
    }
    
    return balancedString(str,num+1,total,acc)
}
```

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
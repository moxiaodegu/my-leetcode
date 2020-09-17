//  my
var runningSum = function(nums) {
    let newNums = [];
    nums.reduce((prve, cur) => {
        newNums.push(prve+cur)
        return prve+cur
    },0)
    return newNums;
};


var runningSum = function(nums) {
	/*
		The current array index is increamented by the accumlator which is the new value of arr[i]
		
		Example trace:
		
		input:
		[1,2,3,4]
		
			acc i  arr                return value
			0   0  1,2,3,4            0 + 1 = 1
			1   1  1,2,3,4            1 + 2 = 3
			3   2  1,3,3,4            3 + 3 = 6
	end  => 6   3  1,3,6,4            6 + 4 = 10
			10  4  1,3,6,10
		
	*/
		nums.reduce((acc, _, i, arr) => arr[i] += acc )
		return nums
	
	};

// my:
var smallerNumbersThanCurrent = function(nums) {
    let len = nums.length;
    let arr = []
    for(let i = 0; i< len; i++) {
        arr[i] = 0;
        for(let j = 0; j< len; j++) {
            if (nums[i] > nums[j]) {
                arr[i] += 1
            }
        }        
    }
    return arr
};
// optimal
var smallerNumbersThanCurrent = function(nums) {
    const sorter = (a,b) => a-b;
    const mapper = (v,i) => [v,i];
    const tempMap = new Map([...nums].sort(sorter).map(mapper).reverse());
    return nums.map(x => tempMap.get(x));
};

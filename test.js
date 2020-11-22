/**
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出这两个正序数组的中位数，
示例1
nums1 = [1, 3]nums2 = [2]则中位数是 2.0
nums1 = [1, 2]nums2 = [3, 4]则中位数是 (2 + 3)/2 = 2.5

 */

 function bar(num1,num2) {
	const arr = [...num1,...num2].sort((a,b) => a-b)
	const num = arr.length;
	return num%2 ? arr[parseInt(num/2)] : (arr[num/2-1] + arr[arr/2+1])/2
 }

 function deb(fun, delay) {
	let timer = null;
	return function() {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout( () => {
			fun.apply(this, arguments)
		},delay)
	}
 }
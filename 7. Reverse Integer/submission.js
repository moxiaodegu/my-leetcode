// my：
var reverse = function(x) {
	const num = Array.from(String(Math.abs(x)), Number).reverse().join('');
	if (x > 0) return 2 ** 31 -1 < num ? 0 : num;
	return (-2) ** 31 > -num ? 0 : -num
}
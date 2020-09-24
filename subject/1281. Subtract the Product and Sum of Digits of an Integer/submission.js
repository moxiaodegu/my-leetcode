// my
var subtractProductAndSum = function(n) {
	let arr =  String(n).split('');
    let pod = arr.reduce((prve,cur) => Number(prve)*Number(cur))
    let sod = arr.reduce((prve,cur) =>  Number(prve)+Number(cur))
    return pod - sod
};

// optimal
var subtractProductAndSum = (n,x = Array.from(String(n), Number)) => x.reduce((a,b)=>a*b) - x.reduce((a,b)=>a+b);

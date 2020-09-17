/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // let num = 0;
    // for(let i of S) {
    //     if (J.indexOf(i) > -1) {
    //         num ++
    //     }
    // }
    // return num;
    
	// return S.split``.reduce((prve,cur) => prve + J.includes(cur),0)
	// return Array.from(S).reduce((prve,cur) => prve + J.includes(cur),0)
    return [...S].reduce((prve,cur) => prve + J.includes(cur),0)
};
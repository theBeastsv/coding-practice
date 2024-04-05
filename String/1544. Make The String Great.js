var makeGood = function(s) {
    if( s.length <=1 ) return s;
    let i =0;
    let result =[]
 while (i < s.length) {
        if (result.length > 0 && Math.abs(s[i].charCodeAt(0) - result[result.length - 1].charCodeAt(0)) === 32) {
            result.pop(); 
        } else {
            result.push(s[i]); 
        }
        i++;
    }

    return result.join('');
};
let s = "abBAcC";
console.log(makeGood(s))
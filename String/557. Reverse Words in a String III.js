/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a =s.split(" ")
    
    let arrr=[];

   
    for(let i =0 ; i< a.length;i++){
arrr.push (a[i].split("").reverse().join(""))
     
    }
  
    return arrr.join(' ');
};

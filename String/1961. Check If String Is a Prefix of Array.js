var isPrefixString = function(s, words) {

  let concatenatedString = '';
    
    for (let word of words) {
        concatenatedString += word;
        if (concatenatedString === s) {
            return true;
        }
        if (!s.startsWith(concatenatedString)) {
            return false;
        }
    }
    
    return false;



//let constr= '';

//for(let word of words){
 //   constr+=word;
 //   if(constr === s){
//        return true
 //   }
//    else if (constr.length > s.length) return false
//}



//   const n = s.length;
//   let a = words.join('');
//     if (a.length !== n) {
//         return false;
//     }
//   return s === a

    
};

let s ="a",words =["aa","aaaa","banana"];
//  let s = "iloveleetcode", words = ["i","love","leetcode","apples"]
console.log(isPrefixString(s,words));
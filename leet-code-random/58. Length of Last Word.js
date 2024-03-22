// input :- 'Hello World';  // output:- "world"  5

var lengthOfLastWord = function(s) {
    
    s = s.trim();
    let word = s.split(' ')
   return  word.length>0 ? word[word.length -1].length :0
    
    
    
};
console.log(lengthOfLastWord("Hello World"))
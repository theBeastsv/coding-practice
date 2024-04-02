var isAnagram = function(s, t) {
    if(s.length !== t.length ) return false;
    let s1 = s.split('').sort((a, b) => b.localeCompare(a)).join('');
    let s2= t.split('').sort((a, b) => b.localeCompare(a)).join('');
    return s1 === s2 ?  true :  false
};

let s = "anagram", t = "nagaram"
console.log(isAnagram( s,t));



// faster code time compl O(n)
var isAnagram = function(s, t) {
 
    if (s.length !== t.length) {
        return false;
    }
    
    
    const charFrequency = new Map();
    
  
    for (let char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    
   
    for (let char of t) {
        
        if (!charFrequency.has(char)) {
            return false;
        }
        
        charFrequency.set(char, charFrequency.get(char) - 1);
       
        if (charFrequency.get(char) === 0) {
            charFrequency.delete(char);
        }
    }
    
    
    return true;
};

let s = "anagram", t = "nagaram"
console.log(isAnagram( s,t));





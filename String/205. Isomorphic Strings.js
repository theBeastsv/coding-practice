var isIsomorphic = function(s, t)
{
    if (s.length !== t.length) return false; 
    
    const map = new Map(); 
    const mappedChars = new Set(); 
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
       
        if ((map.has(charS) && map.get(charS) !== charT) || (mappedChars.has(charT) && map.get(charS) !== charT)) {
            return false;
        }
        
      
        map.set(charS, charT);
        mappedChars.add(charT);
    }
    
    return true; 
 }
 
 

let s = "egg", t = "add"
console.log(isIsomorphic(s,t))
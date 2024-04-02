/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
         const words = s.split(" ");
    
    if (pattern.length !== words.length) {
        return false;
    }
    
    const patternMap = new Map();
    const wordMap = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        
        if (!patternMap.has(char) && !wordMap.has(word)) {
            patternMap.set(char, word);
            wordMap.set(word, char);
        } else {
            if (patternMap.get(char) !== word || wordMap.get(word) !== char) {
                return false;
            }
        }
    }
    
   
    
    
   
   
    return true;
};
var groupAnagrams = function(strs) {
  const map = new Map();
  
  for(let str of strs){
      const sorted= str.split('').sort().join();
      if(map.has(sorted)){
          map.get(sorted).push(str)
      }
      else
      {
          map.set(sorted,[str])
      }
  }
    
    
    return Array.from(map.values());
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs))
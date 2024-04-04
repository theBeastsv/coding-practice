var maxDepth = function(s) {
     let maxD=0;
    let curD=0;
    
    for(let char of s){
       
        if(char === '('){
            
            curD++;
            maxD=Math.max(maxD,curD)
        }
        else if(char === ')'){
            curD--;
        }
    }
    return maxD
};
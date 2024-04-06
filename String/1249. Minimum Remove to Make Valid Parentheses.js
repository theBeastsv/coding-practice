var minRemoveToMakeValid = function(s) {
    const stack =[]
    str=s.split("")
    for(let i=0;i<str.length;i++){
        if(str[i]=== '('){
            stack.push(i)
        }else if(str[i]===')'){
            if(stack.length ===0){
                str[i]=''
            }
            else{
                stack.pop();
            }
        }
    }
   while (stack.length > 0) {
        str[stack.pop()] = '';
    }
    
    return str.join('');
};

let s = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s))
// check string is pallindrome with & wwithout buildin

function withoutf(str){
      let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev+= str[i]
    }
    return str===rev;
}
console.log("without inbuilt function:-",withoutf("saas"))

function withf(str){
    let str1= str.split("").reverse().join('');
    return str1===str;
}
console.log(withf("With inbuilt function:-","sas"))
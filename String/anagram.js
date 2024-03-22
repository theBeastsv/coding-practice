function anagram(str1,str2){
    let str11= str1.split("").sort().join();
    let str21=str2.split("").sort().join();
    return str11===str21
}
console.log(anagram("listen","silent"))
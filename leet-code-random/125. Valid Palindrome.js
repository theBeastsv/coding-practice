var isPalindrome = function(s) {
  
   s= s.toLowerCase().replace(/[^a-z0-9]/g, '')


let left =0 ;
let right= s.length-1;

while(left< right){
    if(s[left] !== s[right]){
        return false
    }
    left++;
    right--;
    
}
return true;
};
let  s= "A man, a plan, a canal: Panama"
// let s="race a car"

console.log(isPalindrome(s))
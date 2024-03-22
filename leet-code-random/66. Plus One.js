/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      for(let i=digits.length-1;i>= 0 ;i--)
   {
       digits[i]++;
       
       if(digits[i] <10){
           
           return digits
       }
    //   console.log(digits)
       digits[i]=0;
    //   console.log(digits)
   }
 
 digits.unshift(1);
    return digits
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
       if(nums.length ===0) return 0;
   
   let unqiueindex=0;
   
   for(let i=0;i<nums.length;i++){
       if(nums[i]!== nums[unqiueindex]){
           
           unqiueindex++;
           nums[unqiueindex]=nums[i];
       }
       
   }
   return unqiueindex +1
};
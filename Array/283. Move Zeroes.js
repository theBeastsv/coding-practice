/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroPointer = 0; 
    
   
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] !== 0) {
            [nums[i], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[i]];
            nonZeroPointer++;
        }
    }
    return nums
};
let a = [1,2,3,4,6,7,8];
const target=3
var searchInsert = function(nums, target) {
    
    for(let i=0;i<nums.length;i++){
        
        if( nums[i] == target){
     
        return  nums.indexOf(nums[i])
            
        } if(target < nums[i]) {
          
         return i;
        }
        
    }
    
    return nums.length;
 
};

console.log(searchInsert(a,target))
var createTargetArray = function(nums, index) {
    let target=[];
    for(let i=0;i<nums.length;i++){
     const num = nums[i];
        const idx = index[i];

       
        target.splice(idx, 0, num);
    }
    return target;
};

let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];
console.log(createTargetArray(nums,index));
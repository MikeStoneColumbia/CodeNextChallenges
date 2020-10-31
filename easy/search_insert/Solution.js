function searchInsert(nums,target){
    
    for(var i = 0; i < nums.length; i++ ){ // run through the array
        if(nums[i] >= target){ // if we find the target or a number larger than target return
            return i;
        }
    }
    
    return nums.length // the target number might be the largest item in the array
    //example : nums = [1,3,5,6], target = 7. the returned result should be index 4
}
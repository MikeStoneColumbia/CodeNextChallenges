function smallerNumbersThanCurrent(nums){
    var solution = [] // arr to keep track of solution
    var numsSmaller = 0 // keeps track of how many numbers are smaller than current
    
    for(var i = 0; i < nums.length; i++){ // this loop picks the number to compare
        for(var x = 0; x < nums.length; x++){ // this loop compares nums[i] to all other numbers
            if(nums[i] > nums[x]){ 
                numsSmaller++
            }
        }
        solution[i] = numsSmaller // save the number of smaller nums in arr
        numsSmaller = 0 // reset counter for rest of the numbers
    }
    
    return solution
}
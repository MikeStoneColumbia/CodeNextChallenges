function isPalindrome(x){
    var numString = x + "" // turn number to a string
    var rightPointer = numString.length-1 // set an index that will start at the end of string
    
    for(var i = 0; i < numString.length/2; i++, rightPointer--){ // start at the left and right and move towards center
        if(numString.charAt(i) != numString.charAt(rightPointer)){ // if the left char isnt the same as the right char it isn't a palindrome
            return false
        }
        
    }
    return true;
}
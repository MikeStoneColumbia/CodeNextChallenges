function average(salary){
    
    var smallest = salary[0]
    var largest = 0;
    var sum = 0
    
    for(var i = 0; i < salary.length; i++){
        
        if(largest < salary[i]){
            largest = salary[i]
        }
        
        if(smallest > salary[i]){
            smallest = salary[i]
        }
        
        sum += salary[i]
        
    }
    
    sum = sum - largest - smallest
    return sum/(salary.length-2)
    
}
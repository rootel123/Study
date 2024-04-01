function solution(num_list) {
    var answer = 0;
    
    let sum = 0;
    let multiply = 1;
    for(let i = 0; i<num_list.length; i++) {
        sum += num_list[i];
        multiply *= num_list[i]
    }
    
    if(multiply < sum**2)answer=1;
    
    return answer
}
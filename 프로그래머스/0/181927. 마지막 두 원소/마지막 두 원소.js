function solution(num_list) {
    var answer = [...num_list];
    
    let a = answer[num_list.length-1];
    let b = answer[num_list.length-2]
    
    if(a > b) {
        answer.push(a-b);
    }else if(a <= b) {
        answer.push(a*2);
    }
    
    return answer;
}
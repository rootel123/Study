function solution(numLog) {
    var answer = '';
    
    for(let i=0; i<numLog.length-1; i++) {
        const a = numLog[i+1]-numLog[i];
        
        if(a === 1) {
            answer += "w";
        }else if(a === -1) {
            answer += "s";
        }else if(a === 10) {
            answer += "d";
        }else if(a === -10) {
            answer +="a";
        }
    }
    
    return answer;
}
function solution(num_list) {
    let a = num_list.filter(el => (el % 2 === 1));
    let b = num_list.filter(el => (el % 2 === 0));
    
    return Number(a.join('')) + Number(b.join(''));
}
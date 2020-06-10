const repeatedString = (str, n) => {
    let count = 0;
    const len = str.length;

    for(let i = 0; i < len; i++){
        if(str[i] === 'a'){
            count++;
        }
    }
    
    count *= parseInt(n/len);

    for(let i = 0; i < n%len; i++){
        if(str[i] === 'a'){
            count++;
        }
    }

    return count;
}

console.log(repeatedString('aba', 10));
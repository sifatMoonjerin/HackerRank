const twoStrings = (s1, s2) => {
    for(let ch of s2.split('')){
        if(s1.includes(ch)){
            return 'YES';
        }
    }

    return 'NO';

}

console.log(twoStrings('Hello', 'World'))
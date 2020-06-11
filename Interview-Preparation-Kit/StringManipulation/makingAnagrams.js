const makeAnagram = (a, b) => {
    const strHash1 = {};
    const strHash2 = {};
    const keys = [];
    let deleteCount = 0;

    a.split('').forEach(ch => {
        strHash1[ch] = !strHash1[ch] ? 1 : strHash1[ch] + 1;
        if(keys.indexOf(ch) === -1){
            keys.push(ch)
        } 
    });
    b.split('').forEach(ch => {
        strHash2[ch] = !strHash2[ch] ? 1 : strHash2[ch] + 1
        if(keys.indexOf(ch) === -1){
            keys.push(ch)
        } 
    });

    keys.forEach(ch => {
        if(!strHash1[ch]){
            deleteCount += strHash2[ch];
        }else if(!strHash2[ch]){
            deleteCount += strHash1[ch];
        }else{
            deleteCount += Math.abs(strHash1[ch] - strHash2[ch])
        }
    })


    return deleteCount;
}

console.log(makeAnagram('cde', 'abc'));
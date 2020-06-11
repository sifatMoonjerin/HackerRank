const makeAnagram = (a, b) => {
    const strHash = {};
    let deleteCount = 0;

    a.split('').forEach(ch => {
        strHash[ch] = !strHash[ch] ? 1 : strHash[ch] + 1;
        deleteCount++;
    });
    b.split('').forEach(ch => {
        if(strHash[ch]){
            strHash[ch]--;
            deleteCount--;
        }else{
            deleteCount++;
        }
    });

    return deleteCount;
}

console.log(makeAnagram('cde', 'abc'));
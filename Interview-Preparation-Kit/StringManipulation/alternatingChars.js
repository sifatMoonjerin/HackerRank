const alternatingCharacters = s => {
    let deleteCount = 0;

    for(let i = 1; i < s.length; i++){
        if(s[i-1] === s[i]){
            deleteCount++;
        }        
    }
    
    return deleteCount;
}


const testStrings = ['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'];

testStrings.forEach(s => console.log(alternatingCharacters(s)))

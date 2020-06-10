const getLetter = s => {
    switch(true){
        case 'aeiou'.includes(s[0]):
            return 'A';
        case 'bcdfg'.includes(s[0]):
            return 'B';
        case 'hjklm'.includes(s[0]):
            return 'C';
        default:
            return 'D';
    } 
}

console.log(getLetter('zdfgt'));
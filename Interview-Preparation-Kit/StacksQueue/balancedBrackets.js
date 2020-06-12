const isBalanced = s => {
    const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    const stack = [];

    for(let i = 0; i < s.length; i++){
        if(!pairs[s[i]]){
            stack.push(s[i]);
        } else if(pairs[s[i]] !== stack.pop()){
            return 'NO'
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';
}

console.log(isBalanced('{[(])}'));

const isPositive = a => {
    try{
        if(a > 0){return 'YES';}
        throw Error(!!a ? 'Negative Error': 'Zero Error');
    } catch(error){
        return error.message;
    }
}

console.log(isPositive(2));
console.log(isPositive(-2));
console.log(isPositive(0));
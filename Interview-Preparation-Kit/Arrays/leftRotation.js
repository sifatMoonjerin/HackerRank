const rotLeft = (a, d) => {
    // while(d > 0){
    //     a.push(a.shift());
    //     d--;
    // }
    const len = a.length;
    const rotArray = [];

    for(let i = 0; i < len; i++){
        rotArray[i] = a[(i+d)%len];
    }
    
     return rotArray;
}

console.log(rotLeft([1,2,3,4,5],2))
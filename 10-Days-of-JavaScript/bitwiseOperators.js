const getMaxLessThanK = (n, k) => {
    let max = 0;
    for(let i = 1; i <= n; i++){
        for(let j = i+1; j<=n; j++){
            const bit = i&j;
            if(bit > max && bit < k){
                max = bit;
            }
        }
    }
    return max;
}

console.log(getMaxLessThanK(8,5));


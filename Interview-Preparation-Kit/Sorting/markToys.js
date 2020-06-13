const maximumToys = (prices, k) => {
    let total = 0;
    let count = 0;

    prices.sort((a,b) => a-b);
    
    for(let i = 0; i < prices.length; i++){
        total += prices[i];
        if(total > k){
            return count;
        } 
        count++;
    }
}


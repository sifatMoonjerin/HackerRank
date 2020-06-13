const countSwaps = a => {
    const len = a.length;
    let swapCount = 0;
    
    for(let i = 0; i < len; i++){
        for(let j = 1; j < len-i; j++){
            if(a[j-1] > a[j]){
                [a[j-1], a[j]] = [a[j], a[j-1]];
                swapCount++;
            }
        }
    }


    console.log(`Array is sorted in ${swapCount} swaps.
First Element: ${a[0]}
Last Element: ${a[len-1]}`);

}
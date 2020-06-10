const minimumSwaps = arr => {
    let swapCount = 0;

    arr.forEach((num, i) => {
        while(num !== i+1){
            swapCount++;
            [arr[num-1],arr[i]] = [arr[i], arr[num-1]];
            num = arr[i];
        }
    })

    return swapCount;
}
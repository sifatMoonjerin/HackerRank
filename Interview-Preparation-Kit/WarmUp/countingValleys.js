const countingValleys = (n, path) => {
    let position = 0;
    let valleyCount = 0;

    path.split('').forEach(step => {
        if(step === 'U'){
            position++;
        } else {
            position--;
            if(position === -1){
                valleyCount++;
            }
        }
    })

    return valleyCount;
}

console.log(countingValleys(12,'DDUUDDUDUUUD'));
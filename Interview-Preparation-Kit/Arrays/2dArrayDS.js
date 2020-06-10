const hourglassSum = arr => {
    const row = arr.length;
    const column = arr[0].length;

    let sum = 0;
    let max = -Infinity;

    for(let i = 0; i < row-2; i++){
        for(let j = 0; j < column-2; j++){
            sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]
                            +arr[i+1][j+1]
                +arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            if(sum > max){
                max = sum;
            }
        }
    }
    
    return max;

}

console.log(
    hourglassSum([
        [-1, -1, 0, -9, -2, -2],
        [-2, -1, -6, -8, -2, -5],
        [-1, -1, -1, -2, -3, -4],
        [-1, -9, -2, -4, -4, -5],
        [-7, -3, -3, -2, -9, -9],
        [-1, -3, -1, -2, -4, -5]
    ])
);
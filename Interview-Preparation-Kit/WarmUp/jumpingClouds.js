const jumpingClouds = clouds => {
    let count = 0;
    let i = 1;

    while(i < clouds.length){
        i += !!clouds[i+1] ? 1:2;
        count++;
    }

    return count;
}

console.log(jumpingClouds([0,0,0,1,0,0]));
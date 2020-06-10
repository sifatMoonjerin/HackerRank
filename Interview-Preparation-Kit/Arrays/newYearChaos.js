const minimumBribes = q => {
    let bribeCount = 0;
    
    for(let i = q.length-1; i >= 0 ; i--){
        if(q[i] !== i+1){
            if(q[i-1] === i+1){
                bribeCount++;
                [q[i-1], q[i]] = [q[i], q[i-1]];
            } else if(q[i-2] === i+1){
                bribeCount += 2;
                [q[i-2], q[i-1]] = [q[i-1], q[i-2]];
                [q[i-1], q[i]] = [q[i], q[i-1]];
            } else{
                console.log('Too chaotic');
                return;
            }
        }
    }

    console.log(bribeCount);
}

minimumBribes([1,2,5,3,7,8,6,4]);

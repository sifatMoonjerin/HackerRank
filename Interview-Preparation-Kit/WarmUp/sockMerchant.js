const matchingPairs = (n, socks) => {
    const singleSocks = [];
    let pairs = 0;

    socks.forEach(sock => {
        const sockIndex = singleSocks.indexOf(sock);
        if(sockIndex === -1){
            singleSocks.push(sock);
        } else {
            singleSocks.splice(sockIndex, 1);
            pairs++;
        }
    })

    return pairs;
}

//console.log(matchingPairs(7, [10,20,20,10,10,30,50,10,20]))
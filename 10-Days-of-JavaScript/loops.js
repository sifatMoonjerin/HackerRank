const vowelsAndConsonants = s => {
    [...s].forEach(c => {
        if('aeiou'.includes(c)){
            console.log(c);
        } else{
            setTimeout(() => console.log(c),0);
        }
    }) 
}

vowelsAndConsonants('javascriptloops');


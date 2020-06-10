const checkMagazine = (magazine, note) => {
    const collection = {}

    for(let word of magazine){
        collection[word] = collection[word] + 1 || 1;
    }

    for(let word of note){
        if(!collection[word]){
            console.log('No');
            return;
        } 

        collection[word]--;
    }

    console.log('Yes')
    return;

}

const arr1 = ['apgo', 'clm', 'w', 'lxkvg', 'mwz', 'elo', 'bg', 'elo', 'lxkvg', 'elo', 'apgo', 'apgo', 'w', 'elo', 'bg']
const arr2 = ['elo', 'lxkvg', 'bg', 'mwz', 'clm', 'w']

checkMagazine(arr1, arr2);

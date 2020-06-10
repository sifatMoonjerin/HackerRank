const getCount = objects => {
    return objects.filter(obj => obj.x === obj.y).length
}

console.log(getCount([{x:1,y:1},{x:2,y:3},{x:3,y:3},{x:3,y:4},{x:4,y:5}]));

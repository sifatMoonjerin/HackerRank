class Polygon{
    constructor(arr){
        this.sides = arr;
    }

    perimeter(){
        return this.sides.reduce((a,b) => a+b, 0);
    }
}


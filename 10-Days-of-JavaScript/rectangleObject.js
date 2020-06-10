class Rectangle{
    constructor(a,b){
        this.length = a;
        this.width = b;
        this.perimeter = 2*(a + b);
        this.area = a*b;
    }
}

console.log(new Rectangle(4,5));
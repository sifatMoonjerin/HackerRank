const modifyArray = (nums) => {
    return nums.map(num => num*(num%2 === 0? 2: 3));
}

console.log(modifyArray([1,2,3,4,5]))
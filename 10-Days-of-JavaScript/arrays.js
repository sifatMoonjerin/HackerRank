const getSecondLargest = nums => {
    let largestNumber = nums[0];
    let secondLargest = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > largestNumber){
            [largestNumber, secondLargest] = [nums[i], largestNumber];
        } else if(nums[i] > secondLargest && nums[i] < largestNumber){
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

console.log(getSecondLargest([9,9,4]));

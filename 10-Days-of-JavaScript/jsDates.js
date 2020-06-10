const getDayName = dateString => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return dayNames[date.getDay()];
}

console.log(getDayName('11/17/2010'))
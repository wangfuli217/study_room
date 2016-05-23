function sortNumber(a,b) {
    return a - b;
};

var numbers = [20,10,9,8,7,6,5,4,3,2,1];

console.log(numbers.sort(sortNumber));
console.log(numbers.sort());

var updateArray = function (stringArray, a) {
    if (stringArray.includes(a)) {
        return stringArray;
    }
    else {
        stringArray.push(a);
        return stringArray;
    }
};
// Строки
var stringArray = ["apple", "banana", "cherry"];
console.log(updateArray(stringArray, "banana")); // ['apple', 'banana', 'cherry']
console.log(updateArray(stringArray, "strawberry")); // ['apple', 'banana', 'cherry', 'strawberry']
// Числа
var numberArray = [1, 2, 3];
console.log(updateArray(numberArray, 2)); // [1, 2, 3]
console.log(updateArray(numberArray, 4)); // [1, 2, 3, 4]
console.log(stringArray);
console.log(numberArray);

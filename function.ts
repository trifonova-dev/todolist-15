const updateArray = <T>(stringArray: T[], a: T) => {
  if (stringArray.includes(a)) {
    return stringArray
  } else {
    stringArray.push(a)
    return [...stringArray, a]
  }
}

// Строки
const stringArray = ["apple", "banana", "cherry"]
console.log(updateArray(stringArray, "banana")) // ['apple', 'banana', 'cherry']
console.log(updateArray(stringArray, "strawberry")) // ['apple', 'banana', 'cherry', 'strawberry']

// Числа
const numberArray = [1, 2, 3]
console.log(updateArray(numberArray, 2)) // [1, 2, 3]
console.log(updateArray(numberArray, 4)) // [1, 2, 3, 4]

console.log(stringArray)
console.log(numberArray)

// const updateArray = <T>(stringArray: T[], a: T) => {
//   if (stringArray.includes(a)) {
//     return stringArray
//   } else {
//     stringArray.push(a)
//     return [...stringArray, a]
//   }
// }
//
// // Строки
// const stringArray = ["apple", "banana", "cherry"]
// console.log(updateArray(stringArray, "banana")) // ['apple', 'banana', 'cherry']
// console.log(updateArray(stringArray, "strawberry")) // ['apple', 'banana', 'cherry', 'strawberry']
//
// // Числа
// const numberArray = [1, 2, 3]
// console.log(updateArray(numberArray, 2)) // [1, 2, 3]
// console.log(updateArray(numberArray, 4)) // [1, 2, 3, 4]
//
// console.log(stringArray)
// console.log(numberArray)
//
//
// const updateArray = <T>(array:T[], a:T) => {
//   if(array.includes(a)){
//     return array
//   }else{
//     return [...array, a]
//   }
// }
//
// // Строки
// const stringArray = ["apple", "banana", "cherry"]
// console.log(updateArray(stringArray, "banana")) // ['apple', 'banana', 'cherry']
// console.log(updateArray(stringArray, "strawberry")) // ['apple', 'banana', 'cherry', 'strawberry']
//
// // Числа
// const numberArray = [1, 2, 3]
// console.log(updateArray(numberArray, 2)) // [1, 2, 3]
// console.log(updateArray(numberArray, 4)) // [1, 2, 3, 4]

// const getFirstElement = <T>(array:T[]) => {
//   return array[0]
// }
//
// // Пример 1: Массив чисел
// const numbers = [1, 2, 3, 4, 5]
// console.log(getFirstElement(numbers)) // 1
//
// // Пример 2: Массив строк
// const words = ['hello', 'world', 'typescript']
// console.log(getFirstElement(words)) // 'hello'

const filterArray = <T>(array:T[], predicate:(item:T)=>boolean) => {
  return  array.filter(predicate)

}

// Пример 1: Фильтрация чисел
const numbers = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 === 0

console.log(filterArray(numbers, isEven)) // [2, 4]

// Пример 2: Фильтрация строк
const words = ['hello', 'world', 'typescript']
const startsWithT = (word: string) => word.startsWith('t')

console.log(filterArray(words, startsWithT)) // ["typescript"]
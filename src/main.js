// 1 push() method.

// 2 using shift() method array.shift();

// 3 difference is that slice() method returns a new array by giving index where to start and where to end and does not change original array.
// with splice() u can add/remove elements or both at the same  time  from array,it changes original array.

//4 array.length

//5 array.includes("element")

// 6 calling sort() on array of numbers  without compare function causes compare elemets by it's char value and not it's numerical value

// 7 array.slice(); array.concat().

// 8 array.reverse()

// 9 array.concat(array2)

// 10 arrar[1][1]

// assignment 1
// 1
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = i + 1;
}

// 2
let thirdElement = arr[2];

//3
let fifthElement = arr.splice(4, 1, 15);

//4
arr.push(21);

//5
arr.shift();

//Assignment 2: Array Methods - push, pop, shift, unshift
//1
let fruitArray = ["Apple", "Pinnapple", "Watermelon"];
//2
fruitArray.push("Orange");
//3
let lastFruit = fruitArray.pop();
//4
fruitArray.unshift("Strawberry");
//5
let firstFruit = fruitArray.shift();

//Assignment 3: Iterating Over an Array
//1
let arrayOfColors = ["red", "green", "yellow", "blue", "purple"];
//2
for (let i = 0; i < arrayOfColors.length; i++) {
    console.log(arrayOfColors[i]);
}

//Assignment 4: Array Methods - splice and slice
//1
let arrayOfNums = [1, 2, 3, 4, 5, 6, 7];
//2
arrayOfNums.splice(1, 2);
//3
arrayOfNums.splice(1, 0, 21, 22);
//4
let newArrayOfNums = arrayOfNums.slice(-3);

//Assignment 5: Array Sorting
//1
let names = ["luka", "gio", "nika", "nino"];
//2
names.sort();
//3
names.reverse();

// Assignment 6: Finding Elements in an Array
//1
let numbers = [6, 4, 1, 5, 9, 13];
//2
let index = numbers.indexOf(5);
//3
let includes6 = numbers.includes(6);
//4
function greaterThen6(num) {
    return num > 6;
}

let indexOfGreaterThen6 = numbers.findIndex(greaterThen6);
console.log(indexOfGreaterThen6);
//5
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 6) {
        console.log(`index of first element that is greater then 6 is ${i}`);
        break;
    }
}

//Assignment 7: Multi-dimensional Arrays
//1
let gridArray = [
    [2, 4, 6],
    [1, 3, 5],
    [15, 45, 60],
];

//2
console.log(gridArray[1][2]);

//3
gridArray[1][2] = 100;

//Assignment 8: Array Destructuring
//1
let animalsArray = ["dog", "cat", "parrot", "lion", "tiger"];
//2
let [firstElement, secondEelement] = animalsArray;
//3
[firstElement, secondEelement] = [secondEelement, firstElement];

//Assignment 9: Combining Arrays
//1
let arr1 = [3, 1, 5, 7, 10, 2];
let arr2 = [11, 31, 14, 23, 4];
//2
let combinedArray = arr1.concat(arr2);
//3
let combinedArrayBySpread = [...arr1, ...arr2];

//Assignment 10: Reversing and Sorting Arrays
//1
let numbersArray = [4, 0, 7, 3, 9];
//2
numbersArray.reverse();
//3
numbersArray.sort(function (a, b) {
    return b - a;
});

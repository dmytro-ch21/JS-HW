/*
1. Implement a function that checks if a given string is a palindrome (reads the same backward
as forward). Ignore spaces, punctuation, and capitalization.
*/

function checkIfPalindrome(input){

    let clearedInput = [];
    const ignoreCharacters = ".,:;!?\"'- +=";

    for(let ch of input.toLowerCase()){
        if(!ignoreCharacters.includes(ch)){
            clearedInput.push(ch);
        }
    }
    return clearedInput.join('') === clearedInput.reverse().join('');
}
// Tests
// expected true
console.log('racecar -> ' + checkIfPalindrome('racecar'))
console.log('Madam -> ' + checkIfPalindrome('Madam'))
console.log('A man a plan a canal Panama -> ' + checkIfPalindrome('A man a plan a canal Panama'))
console.log("No 'x' in Nixon -> " + checkIfPalindrome("No 'x' in Nixon"))
console.log('12321 -> ' + checkIfPalindrome('12321'))
console.log('a -> ' + checkIfPalindrome('a'))
// expected false
console.log('Hello -> ' + checkIfPalindrome('Hello'))
console.log('Palindrome -> ' + checkIfPalindrome('Palindrome'))

/* --------------------------------------------------------------------------------------------- */

/*
2. Implement a function that takes an array of numbers and returns the sum of all positive
numbers in the array.
*/

function sumOfPositives(arr){
    let result = 0;
    for(let num of arr) {
        if(num > 0){
            result += num;
        }
    }
    return result;
}

// better solution after research
function sumOfPositives2(arr) {
    return arr.reduce((sum, currentValue) => {
        return currentValue > 0 ? sum + currentValue : sum;
    }, 0);
}

//Tests
console.log(sumOfPositives([1,-2,3,5,-6,4,1])) // 14
console.log(sumOfPositives([2.5, -1.3, 0.8, -4.2, 3.7, -2.1])) // 7
console.log(sumOfPositives([12, 3.14, 7.5, 0.9, 100])) // 123.53...
console.log(sumOfPositives([-15, -7.8, -2.3, -0.5, -100])) // 0
console.log(sumOfPositives([10, -5, 'hello', -2.5, true, -8])) // 11 -> because true is considered 1 

/* --------------------------------------------------------------------------------------------- */

/*
3. Implement a function to rotate an array to the right by a given number of steps. For example,
given the array [1, 2, 3, 4, 5] and 2 steps, the rotated array should be [4, 5, 1, 2, 3].
*/

function rotateArrayFor(arr, times){
    let modifiedArray = arr;
    while (times-- > 0) {
        let lastElement = modifiedArray.pop();
        modifiedArray.unshift(lastElement)  
    }
    return modifiedArray;
}

// Tests
console.log(rotateArrayFor([1, 2, 3, 4, 5], 2)); 
console.log(rotateArrayFor([6, 7, 8, 9, 10], 5)); 
console.log(rotateArrayFor([11, 12, 13, 14, 15], 8)); 

/* --------------------------------------------------------------------------------------------- */

/*
4. Create a function that takes an object as input and returns an array of its values. The order of
values in the array should correspond to the order of properties in the object.
*/

function getObjectValues(obj){
    return Object.values(obj);
}

// Tests
let myObj = {
    name: "John",
    age: 30,
    city: "New York",
    profession: "Plumber"
}

console.log(getObjectValues(myObj))

/* --------------------------------------------------------------------------------------------- */

/*
5. Implement a function that merges two objects. If the same property exists in both objects,
the value in the second object should overwrite the value in the first object.
*/

function mergeObjects(obj1, obj2){
    let mergedObj = {}
    for(let key in obj1){
      mergedObj[key] = obj1[key]
    }
    for(let key in obj2){
      mergedObj[key] = obj2[key]
    }
    return mergedObj;
  }

  // better solution with spread operator after a bit of research
  function mergeObjectEfficiently(obj1, obj2){
    return {...obj1, ...obj2}
  }
  
  // Test
  let myObj1 = {
      name: "John",
      age: 30,
      city: "New York",
      profession: "Plumber"
  }
  
  let myObj2 = {
      lastName: "Potter",
      age: 34, // override 
      county: "Broward",
  }
  
  console.log(mergeObjects(myObj1, myObj2))
  console.log(mergeObjectEfficiently(myObj1, myObj2))
/* --------------------------------------------------------------------------------------------- */

/* 
6. Write a function power that takes a base and returns a function. 
The returned function, when invoked with an exponent, should calculate 
and return the result of the base raised to that exponent. 
Use memoization to optimize repeated calculations. 
*/

function power(base){
    const cachedExponents = {}
    return (exponent) => {
        if(cachedExponents[exponent] !== undefined){
            console.log('Cached result returned: ' + cachedExponents[exponent]);
            return cachedExponents[exponent]
        }
        let num = 1;
        for(let i = 1; i <= exponent; i++){
            num *= base;
        }
        cachedExponents[exponent] = num;
        return num;
    }
}

let powerOfTwo = power(2)
let powerOfThree= power(3)
let powerOfNine = power(9)
let powerOfTwentyTwo = power(22)

console.log(powerOfTwo(200));
console.log(powerOfThree(200));
console.log(powerOfNine(200));
console.log(powerOfTwentyTwo(200));
console.log(powerOfThree(20));
console.log(powerOfThree(20));

/* --------------------------------------------------------------------------------------------- */
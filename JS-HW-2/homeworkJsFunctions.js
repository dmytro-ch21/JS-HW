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

//Tests
console.log(sumOfPositives([1,-2,3,5,-6,4,1])) // 14
console.log(sumOfPositives([2.5, -1.3, 0.8, -4.2, 3.7, -2.1])) // 7
console.log(sumOfPositives([12, 3.14, 7.5, 0.9, 100])) // 123.53...
console.log(sumOfPositives([-15, -7.8, -2.3, -0.5, -100])) // 0
console.log(sumOfPositives([10, -5, 'hello', -2.5, true, -8])) // 11 -> because true is considered 1 


/*
3. Implement a function to rotate an array to the right by a given number of steps. For example,
given the array [1, 2, 3, 4, 5] and 2 steps, the rotated array should be [4, 5, 1, 2, 3].
*/

function rotateArrayFor(arr, times){
    
    let modifiedArray = arr;
    console.log(modifiedArray);
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


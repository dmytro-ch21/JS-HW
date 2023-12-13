document.getElementById('email-form').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById('emailInput').value;
    var first_username = email.substring(0, email.indexOf('@'));
    console.log(first_username);
    var second_username = first_username + generateCharacters(3)
    console.log(second_username);
    var third_username = first_username + generateCharacters(4)
    console.log(third_username);
    var fourth_username = first_username + generateCharacters(5)
    console.log(fourth_username);
})

/*
 * This function will generate characters(numbers, letters) with a specified count
 * I utilized a loop here to repeat the action numberOfCharacters times
 * And Used the helper functions below
 */

function generateCharacters(numberOfCharacters){
    var str = '';
    for(let i = 1; i <= numberOfCharacters; i++){
        let number = getRandomAsciiForNumbersOrLetters()
        str += charOrNumber() === 'char' ? String.fromCharCode(number) : number % 10;
    }
    return str;
}

/*
 * This function generates a ASCII number in specific ranges for needed output as numbers or letters
 * I utilized here js object to store ranges 
 * Then randomnly selecting one range
 * Finally use that range for getting an ASCII code
 */
function getRandomAsciiForNumbersOrLetters(){
    const ranges = [
        {min: 48, max: 57},
        {min: 65, max: 90},
        {min: 97, max: 122}
    ]
const range = ranges[Math.floor(Math.random() * ranges.length)]
return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

}


/* 
 * This function will help me decide if converting an ASCII to a character or taking a single digit number from given value
 * It works on random basis, if value generated is 0 we return char else if 1 we return number
 */
function charOrNumber(){
    var value = Math.floor(Math.random() * 2);
    return value === 0? 'char' : 'number'
}


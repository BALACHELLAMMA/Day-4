// 1. Format phone number
// Convert a ten digit number into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone number1. Format phone number
// Convert a ten digit number into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone number

const convertTenDigitNumberIntoUSPhoneFormat = (inputValue) => {

    if (typeof inputValue === 'boolean' || isNaN(inputValue)) return 'input must be a number . symbols ,characters , boolean  are not accepted'
   
    let inputString = '';
    if (typeof(inputValue) !== 'string') inputString = inputValue.toString()
    else inputString = inputValue; 

    if (inputString.length === 10 ){
      return inputString.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    } 
    else if(inputString.length < 10 || inputString.length > 10) {
      return 'was not supplied enough numbers or supplied too many number please pass a 10 digit number'
    } 
    else{
      return 'something went wrong'
    }
}

console.log(convertTenDigitNumberIntoUSPhoneFormat('9840164723')) // string
console.log(convertTenDigitNumberIntoUSPhoneFormat(9840164723))   //number
console.log(convertTenDigitNumberIntoUSPhoneFormat([9840164723]))  //array

// console.log(convertTenDigitNumberIntoUSPhoneFormat(98401647230))   //morethan 10 digit
// console.log(convertTenDigitNumberIntoUSPhoneFormat(9840164)) //lessthan 10 digit
// console.log(convertTenDigitNumberIntoUSPhoneFormat('984#016472a3')) //symbols or characters 
// console.log(convertTenDigitNumberIntoUSPhoneFormat('hello')) 
// console.log(convertTenDigitNumberIntoUSPhoneFormat(true))








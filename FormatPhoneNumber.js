// 1. Format phone number
// Convert a ten digit number into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone number1. Format phone number
// Convert a ten digit number into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone number

const convertTenDigitNumberIntoUSPhoneFormat = (inputNumber) => {

    if (typeof inputNumber === 'boolean' || isNaN(inputNumber)) return 'input must be a number . symbols ,characters , boolean  are not accepted'
   
    if (typeof(inputNumber) !== 'string') inputNumber = inputNumber.toString()
    
    if (inputNumber.length === 10){
      return inputNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    } 
    else if(inputNumber.length < 10 || inputNumber.length > 10) {
      return 'was not supplied enough numbers or supplied too many number please pass a 10 digit number'
    } 
    else{
      return 'something went wrong'
    }
}

console.log(convertTenDigitNumberIntoUSPhoneFormat('9840164723')) // string
console.log(convertTenDigitNumberIntoUSPhoneFormat(9840164723))   //number
console.log(convertTenDigitNumberIntoUSPhoneFormat([9840164723]))  //array
console.log(convertTenDigitNumberIntoUSPhoneFormat(98401647230))   //morethan 10 digit
console.log(convertTenDigitNumberIntoUSPhoneFormat(9840164)) //lessthan 10 digit
console.log(convertTenDigitNumberIntoUSPhoneFormat('984#016472a3')) //symbols or characters 
console.log(convertTenDigitNumberIntoUSPhoneFormat('hello')) 
console.log(convertTenDigitNumberIntoUSPhoneFormat(true))

// const input = 123456789
// console.log(input)







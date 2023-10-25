// 5. Remove zeros either trailing / leading
// Input - "000000123423423000"
// removeZeros(input, "leading") // output 123423423000
// removeZeros(input, "trailing") // output 000000123423423

const removeZeros = (inputString,leadingOrTrailing) =>{
    if ( typeof inputString!=='string' ){
        console.error('Invalid input, check whether it is a string');
        return false;
    }

    if ( isNaN(inputString) || inputString<=0 ) {
        console.error('Invalid input');
        return false;
    }

    if( !inputString || !leadingOrTrailing ){
        console.error('Invalid input');
        return false;
    }

    if( inputString.includes('.') ){
        console.log('Floating value not accepted');
        return false;
    }
    
    
    let index;
    if ( leadingOrTrailing.toLowerCase() === "leading" ) {
        
        //to get the start index of non-zero value 
        //"leading" ==> loop starts from 0
        
        index = 0;
        while (index < inputString.length && inputString[index] === '0') {
            index++;
        }
        return inputString.slice(index);
    } 
    else if ( leadingOrTrailing.toLowerCase() === "trailing" ) {
      
        //to get the start index of non-zero value 
        //"trailing" ==> loop starts from length-1
        
        index = inputString.length - 1;
        while ( index >= 0 && inputString[index] === '0') {
            index--;
        }
        return inputString.slice(0, index + 1);
    } 
    else {
        return inputString;
    }
}


const inputString = "000000123423423000" ; //000000123423423000
const leadingOrTrailing = "leading"; //"trailing"

// console.log(removeZeros(inputString,leadingOrTrailing)); //leading
// console.log(removeZeros(inputString,'trailing'));  //trailing


//Case-insensitive check
// console.log(removeZeros(inputString,'Leading'));
// console.log(removeZeros(inputString,'Trailing'));
// console.log(removeZeros(inputString,'LEADING'));
// console.log(removeZeros(inputString,'TRAILING'));



//empty values check
// console.log(removeZeros(inputString,''));
// console.log(removeZeros('',inputString));
// console.log(removeZeros('',''));

// console.log(removeZeros(000000123423423000,leadingOrTrailing)) //number type not accepted

// console.log(removeZeros('-0000012340000','leading')); // negative


// ======Avoid floating values=====
//floating values works if it is a string
// console.log(removeZeros('0.1100','trailing')) 
// console.log(removeZeros('0.1100','leading'))

// floating values not work if it is a number
// console.log(removeZeros(0.001100,'trailing'))
// console.log(removeZeros(0.001100,'leading'))



























// //for looping inputString , we need to convert it into 'string'
// let inputString = '';
// if (typeof(inputString) !== 'string') inputString = inputString.toString()
// else inputString = inputString;
  
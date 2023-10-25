// 4. Check if the number is in range
// For example: checkInRange([1, 10], 4) // true since 4 is in between 1 and 10
// checkInRange([10, 100], 8) // true false 8 is not in between 10 and 100

const checkNumberInRange = (inputRangeArray, numberToFindInRange ) => {

    if ( !Array.isArray(inputRangeArray) && inputRangeArray.length!==2 ) 
    {
        console.error("Input Range should be in array format or it's length should be as '2' ");
        return false;
    }

    //it won't work if the first parameter is in number format
    if (typeof inputRangeArray[0]!=='number' && typeof inputRangeArray[0]!=='number'){
       console.error("range values should be in 'number' format");
       return false;
    }

    if ( !(inputRangeArray[0] < inputRangeArray[1]) ) {
        console.error("Invalid Range");
        return false;
    }

    if (typeof numberToFindInRange !=='number') {
        console.error("Input number should be in number format"); 
        return false;
    }

    let isInRange = false; //flag to know it's in range or not

    if (inputRangeArray[0] !== numberToFindInRange  && inputRangeArray[1] !==numberToFindInRange ) {
        if (inputRangeArray[0] < numberToFindInRange  && inputRangeArray[1] > numberToFindInRange ) {
               isInRange =true;
        }
    }
    return isInRange;
}

const range  = [10,'20'];
const numberToFindInRange = 12;
console.log(checkNumberInRange(range,numberToFindInRange));
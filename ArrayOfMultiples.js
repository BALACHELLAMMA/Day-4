// 3. Array of Multiples
// Get the result of the array in multiples
// For example: [2, 5];
// Result: [2, 4, 6, 8, 10]

const getArrayOfMultiple =(inputArray)=>{

    if (!Array.isArray(inputArray) && inputArray.length!==2){
        console.error('Input should be in array format or check the length of the input array');
        return false;
    }

    if (typeof inputArray[0]!== 'number' || typeof inputArray[1] !=='number' || inputArray[0]<=0 || inputArray[1]<=0) 
    {
        console.error('Invalid input , check the type of the input is in number or  If it is less than or equal to zero values are not accepted');
        return false;
    }

    var resultArray = [];
    for(let multiple=1; multiple <= inputArray[1]; multiple++){
        resultArray.push(inputArray[0] * multiple);
    }
    
    return resultArray;
}

const array = [2,5];
console.log(getArrayOfMultiple(array));


// console.log(getArrayOfMultiple(2,5));    // not an array
// console.log(getArrayOfMultiple([0,5]));  // zero
// console.log(getArrayOfMultiple([2,-1]));   // -ve value

// console.log(getArrayOfMultiple([2,'5'])); // string value
// console.log(getArrayOfMultiple(['2',5])); // string value
// console.log(getArrayOfMultiple(['2','5'])); // string value

// console.log(getArrayOfMultiple([2,true])); // boolean value



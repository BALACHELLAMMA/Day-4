// 3. Array of Multiples
// Get the result of the array in multiples
// For example: [2, 5];
// Result: [2, 4, 6, 8, 10]

const GetArrayInMultiple =(inputArray)=>{

    if (!Array.isArray(inputArray)) return 'Input should be in array format';
    
    if (inputArray.length!==2) return 'Invalid input, check the length of the input array'

    if (typeof inputArray[0]!== 'number' || typeof inputArray[1] !=='number' || inputArray[0]<=0 || inputArray[1]<=0) 
       return 'Invalid input , check the type of the input is in number or  If it is less than or equal to zero values are not accepted';

    var resultArray = [];
    for(let multiple=1; multiple <= inputArray[1]; multiple++){
        resultArray.push(inputArray[0] * multiple);
    }
    
    return resultArray;
}

const array = [2,5];
console.log(GetArrayInMultiple(array));


console.log(GetArrayInMultiple(2,5));    // not an array
console.log(GetArrayInMultiple([0,5]));  // zero
console.log(GetArrayInMultiple([2,-1]));   // -ve value
console.log(GetArrayInMultiple(['2','5'])); // string value
console.log(GetArrayInMultiple([2,true])); // boolean value



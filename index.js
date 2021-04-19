
const combineArrays = (arr1,arr2) =>{
    // iterate through the arrays to check if the values are numbers
    let Array1 = arr1.every(function(element) {return typeof element === 'number';});
    let Array2 = arr2.every(function(element) {return typeof element === 'number';});

    // Condition to check if arrays have NaN parameters
    if(Array1 == false && Array2 == false){
        // throw an error if the arrays have an NaN
        throw 'All the values of both the arrays should be a number!';
    }
    // Combine the two arrays
    let arr3 = arr1.concat(arr2);

    // Sort the combined array in ascending order
    let FinalArray = arr3.sort((x,y)=>
        {
            return x-y
        })
    return  FinalArray;
}

// Test 1: Combine two arrays and sort the values in ascending order
console.log("Test 1:")
console.log(combineArrays([3,8,99,20],[33,1,4,11,17]))

//Test 2: catch the thrown error here and display the error message inside the console
try {
    combineArrays([3,8,'car',20],['bus',1,4,11,17]);
} catch (e) {
    console.log("Test 2:")
    console.error(e);
    // expected output: "All the values of both the arrays should be a number!"
}


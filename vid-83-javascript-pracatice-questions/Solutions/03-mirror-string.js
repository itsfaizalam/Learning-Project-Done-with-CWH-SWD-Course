/* Question: 3. The Mirror Mirror: Imagine you have a string, 
and you need to create a new string that is a mirror image of 
the original. Write a function that appends the reversed version 
of the original string to itself.
*/

// Function to create a mirrored string
function createMirrorString(original){
// Step 1: Reverse the original string
// The split('') method turns the string into an array of characters
// The reverse() method reverses the array
// The join('') method joins the reversed array back into a string
    let reversed = original.split('').reverse().join('');

// Step 2: Append the reversed string to the original string
// The '+' operator is used to concatenate the original string and the reversed string
    let mirrorString = original + reversed;

 // Step 3: Return the result
    return mirrorString;
}


// Example usage:
let originalString = "Faiz";

// console.log(createMirrorString(originalString)) // Argument Call the function with (original) parameter 
let mirrored = createMirrorString(originalString);
console.log(mirrored)


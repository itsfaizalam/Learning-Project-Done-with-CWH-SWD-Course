function doubleTrouble(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // const element = arr[i]; 
        if (i == 0 || arr[i] !== arr[i - 1]){
            // Agar pehla element hai ya pichle element se different hai
            result.push(arr[i] * 2);
        }
        else{
            // agar same hai to usko double nahi karenge
            result.push(arr[i]);            
        }
    }
    return result;
}

// Testing
let input = [2, 3, 3, 4, 5, 5, 5];
console.log(doubleTrouble(input)); 
// Output: [4, 6, 3, 8, 10, 5, 5]


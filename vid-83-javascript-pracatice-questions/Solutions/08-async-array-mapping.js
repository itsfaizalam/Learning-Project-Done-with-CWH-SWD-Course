// Asynchronous function to multiply numbers by 2 after a delay
async function asyncArrayMapping(numbers) {
    // Create an array of Promises using the map method
    const promises = numbers.map((num) => {
        return new Promise((resolve) => {
            // Set a timeout of 500 milliseconds
            setTimeout(() => {
                // Multiply the number by 2 and resolve the promise
                resolve(num * 2);
            }, 500);
        });
    });

    // Wait for all Promises to resolve and return the results
    return Promise.all(promises);
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];

asyncArrayMapping(inputArray)
    .then((result) => {
        console.log(result); // Output after 500ms: [2, 4, 6, 8, 10]
    })
    .catch((error) => {
        console.error("Error:", error);
    });

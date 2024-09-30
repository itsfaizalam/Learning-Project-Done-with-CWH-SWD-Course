
/*
Exercise 5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a 
   negative number. Write a function that performs this summation.
*/


function sumUntilNegative(arr){
    // ek variable "total" banate hai jo sum ko track karega
    let total = 0;

    // array ke har element ko loop ke through process karte hai.
    for (let i = 0; i < arr.length; i++) {

    // Agar element negative hai to loop ko break kar do
        if (arr[i] < 0){
        break;        
    }

    // Agar current element negative nahi hai to hum usse total variable me add kar dete hain. 
    //Yeh summation tab tak hota rahega jab tak negative number na mil jaye.
    total += arr[i]
}

// Final sum return karte hai
return total;

}

let numbers = [10, 20, 30, -5, 40]; // Yeh array me negative number -5 hai

// argumment  "sumUntilNegative" ke zariye function ko call karte hai aur "numbers" ko "arr" name ke parameter ko pass karte hai/
console.log(sumUntilNegative(numbers)); // Output: 60
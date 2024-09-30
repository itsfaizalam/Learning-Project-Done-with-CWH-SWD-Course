/*
 Exercise: 6. The Vowel Counter:
   You need to create a function that counts the number of vowels in a 
   given string. Consider both uppercase and lowercase vowels.
*/

function countVowels(str) {
    // 'vowels' me humne saare lowercase aur uppercase vowels define kiye hain
    const vowels = "aeiouAEIOU";

    // 'count' ek variable hai jisme hum vowel ke count ko rakhenge. Initially, yeh 0 se shuru hoga
    let count = 0;

    // Yeh loop har character ko check karega string 'str' ke andar
    for (let i = 0; i < str.length; i++) {
        // 'vowels.includes(str[i])' check karta hai ki current character vowel hai ya nahi
        // Agar vowel present hai, to 'count' ko ek se increase kar dete hain
        if (vowels.includes(str[i])) {
            count++; // Vowel mila, to count ko 1 se increase kar do
        }
    }
    // Loop complete hone ke baad, vowel ka total count return kar dete hain
    return count;
}

// Example string:
let inputString = "The quick brown Fox jumps over the lazy dog.";

// Yahaan hum function ko call kar rahe hain aur console me output print kar rahe hain
console.log(countVowels(inputString));  // Output: 11

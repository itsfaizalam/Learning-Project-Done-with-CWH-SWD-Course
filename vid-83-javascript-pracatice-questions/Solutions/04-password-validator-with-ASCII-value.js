
/* Question 4: The Password Validator: You are building a password validation feature. 
Create a function that checks if a given password meets the following criteria: at 
least 8 characters long, contains both uppercase and lowercase letters, and includes 
at least one digit. */

function isValidPassword(password) {
    // Pehle length check karenge, agar password 8 characters se chhota hai to directly false return karenge
    if (password.length < 8) {
        return false;
    }

    // Kuch flags banayenge to track kar sake ki password me uppercase, lowercase aur digit hai ya nahi
    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    // Password ke har character ko loop ke through check karenge
    for (let i = 0; i < password.length; i++) {
        let ascii = password.charCodeAt(i); // Character ka ASCII value nikalte hain

        // Agar ASCII value 65 se 90 ke beech hai, to ye uppercase letter hai (A-Z)
        if (ascii >= 65 && ascii <= 90) {
            hasUppercase = true; // Uppercase flag ko true karenge
        }
        // Agar ASCII value 97 se 122 ke beech hai, to ye lowercase letter hai (a-z)
        else if (ascii >= 97 && ascii <= 122) {
            hasLowercase = true; // Lowercase flag ko true karenge
        }
        // Agar ASCII value 48 se 57 ke beech hai, to ye digit (0-9) hai
        else if (ascii >= 48 && ascii <= 57) {
            hasDigit = true; // Digit flag ko true karenge
        }

        // Agar teeno condition true ho jaati hain (uppercase, lowercase aur digit), to return true karenge
        if (hasUppercase && hasLowercase && hasDigit) {
            return true; // Saare rules satisfy hote hain, password valid hai
        }
    }

    // Loop ke baad, agar kisi ek bhi condition me false mila, to false return karenge
    return hasUppercase && hasLowercase && hasDigit;
}

// Testing the function with different passwords
console.log(isValidPassword("Abcdef1g"));  // true (yeh valid password hai, saari conditions satisfy ho gayi

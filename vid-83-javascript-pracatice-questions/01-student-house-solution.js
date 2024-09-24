// Solution the question 1.
let students = ["Faiz", "Shama", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

let houses = []
for (const student of students) {
    if(student.length < 6){
        houses.push("Red")
    }
    else if(student.length < 8){
        houses.push("Blue")
    }
    else if(student.length < 12){
        houses.push("Green")
    }
    else{
        houses.push("Yellow")
    }
}

// console.log("houses")

// extra logic created by faiz
console.log("House Assignments:");
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]} : ${houses[i]} house`);
}


// Clearing concept for Generating whole integer number between any number range in this example we are genrating number between from 1 to 6.

function randomIntFromInterval (min, max){ // min and max included
    return Math.floor(Math.random()*(max-min)+min) // formula for range between (min to max) = Math.floor(r*(max-min)+min)
}

const rndInt = randomIntFromInterval(1,6)
console.log(Math.random()) // displayed the generated random number
console.log(rndInt)


function anotherRandomInt (minimum, maximum){ // min and max included
    return Math.floor(minimum + maximum * Math.random()) // formula for range between (min to max) = Math.floor(min+max*r)
}

const myRndInt = anotherRandomInt(1, 6)
console.log(Math.random()) // displayed the generated random number
console.log(myRndInt)

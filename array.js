// # Destructuring

//     ** Instructions **
// #### 1. Array Destructuring
//     * Declare the variables`fruit`, `vegetable`, `food`.Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza"(assign the "bread", "cakes" and "pizza" to`food`).Use array destructuring to complete this task.






const [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];


console.log(fruit, vegetable, food);
console.log();


console.log("===============================================");




// #### 2.Object Destructuring
//     * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`.Assign each value to a variable.Print out the values.


const hallowenCostume = {
    fran: "witch",
    john: "zombie",
    jack: "bloody",
    james: "spooky",
}


const { fran, john, jack, james } = hallowenCostume;
console.log(fran, john, jack, james);


console.log("===============================================");


// #### 3. Parameters: Object Destructuring
//     * Create an object with band / musician details e.g.name of the band / musician, greatest hit, nationality, genre etc. 
// * Then, create a function to print all of the band / musician's data. 
//     * Example
//         ```javascript
// `Regina Spektor is a American - Russian singer / songwriter and pianist.The musician sings indie - pop and their greatest hit is "Us"`.
// ```


const musicalBand = {
    singer: "Brian johnson",
    country: "Australia",
    genre: "rock",
    band: "AC/DC",
    greatestHits: "Thunderstruck",

}
function printStatus({ singer, country, genre, band, greatestHits }) {
    console.log(`${singer} was in ${band} ${country} singer / and songwriter. The musician sings ${genre} and their greatesthits is ${greatestHits}`);
}

printStatus(musicalBand);

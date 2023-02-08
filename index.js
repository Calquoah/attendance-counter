// document.getElementById("count-el").innerText = 5

// When you need to store data, you can create variables
// in Javascript. To do that enter this code:

// let count = 5

// //to INCREMENT the count by, for example, 1 
// // here is what you do:

// count = count + 1

// console.log(count)


//To determine if your count is actually "0" do this:

// console.log(count)

//let myAge = 33

//console.log(myAge)

//The "onclick event listener"
//Edit HTML with "onclick"
//Then link the increment attribute in HTML to JS like this:


// document.getElementById("count-el").innerText = 5
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


// camelCase - capitalize the first letter of the second word
let countEl = document.getElementById("count-el") // <-- this is called "pass in argument"

// For this one, I had to retrieve the "save-el" from the HTML first
let saveEl = document.getElementById("save-el")
// We have now turned this document.getElementById("count-el")
// into this variable: let countEl

//Now we have to verify that we don't have any bugs so we:

// console.log(saveEl)

let count = 0

function increment() {
    count += 1 // using the new "+=" shortcut!!!
    countEl.textContent = count
    //console.log(count)
}

// Create the "Save" button

// CHALLENGE:

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph


function save() {
    let countStr = count + " - "  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    saveEl.textContent += countStr // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    // To do this, I add "+=" to the innerText
    countEl.textContent = 0 
    count = 0 // You need to reset the count to "0" because JS remembers
    // what you did and so you need to give it specific instructions
}

// Note that, in the example, there is a space between
// the colon and the numbers. The reason there is no space
// for us, however, is because of the "innerText" in
// the save function.

// To fix this, we Googled "innerText alternative mdn"
// and we find that we can change it to "textContent" so that
// the browser can read all of the elements. Even the hidden one.
// Note, we've also changed it in the 
// "increment" function, as well!


// In this challenge, I have to reset the number
// to 0 every time I hit the "Save" button.
// To do this, I did this: (Look at the 
// save function for the solution)




















































//CHALLENGES!!!!!//

//CHALLENGE 1!!!

// let myAge = 33
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

//CHALLENGE 2!!!

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

//CHALLENGE 3!!!

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


//let count = 0

// function increment() {
//     count = count + 1
//     console.log(count)
// }


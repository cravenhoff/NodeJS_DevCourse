// const square = function(x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = x => x * x;

// console.log(square(2));

const event = {
    name: "Birthday Party",
    guestList: ["Andrew", "Jen", "Mike", "Shawn"],
    printGuestList: function() {
        console.log("Guest list for " + this.name);

        // Arrow functions are poor options for method functions or object properties
        this.guestList.forEach((guest) => { // Do not bind their own value but that of their context or parent scope.
            console.log(guest + " is attending the " + this.name);
        })
    }
}

event.printGuestList();
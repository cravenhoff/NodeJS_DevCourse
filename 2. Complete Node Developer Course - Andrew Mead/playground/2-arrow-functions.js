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
    }
}

event.printGuestList();
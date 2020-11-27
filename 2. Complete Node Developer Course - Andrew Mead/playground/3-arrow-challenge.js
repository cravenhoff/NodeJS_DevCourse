/* --- Challenge: Create method to get incomplete tasks ---
1. Define getTasksToDo method
2. Use filter to to return just the incompleted tasks (arrow function)
3. Test your work by running the script
*/

const tasks = {
    // Property 1: tasks
    tasks: [
        {
            text: 'Grocery shopping',
            completed: true
        },
        {
            text: 'Clean yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: false
        }
    ],
    // Property 2: getTasksToDo()
    getTasksToDo: function(tasks) {
        // Short form ES6 Arrow Function
        return this.tasks.filter(task => task.completed === false);

        return incompleteTasks;
    }
}

console.log("Tasks to do:");
console.log(tasks.getTasksToDo());
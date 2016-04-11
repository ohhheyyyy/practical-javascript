// To Do App V3

// It should store the todos array on an object

var todoList = {
    todos: ["item 1", "item 2", "item 3"],

    // It should have a displayTodos method

    displayTodos: function() {
        console.log("My to dos: ", this.todos);
    },

    // It should have an addTodo method

    addTodo: function(todoItem) {
        this.todos.push(todoItem);
        this.displayTodos();
    },

    // It should have a changeTodo method

    changeTodo: function(position, updatedItem) {
        this.todos[position] = updatedItem;
        this.displayTodos();
    },


    // It should have a deleteTodo method

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

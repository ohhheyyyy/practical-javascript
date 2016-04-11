// To Do App V2

// It should have a place to store todos

var todos = [];

// It should have a function to display todos

var displayTodos = function(todos) {
    console.log("My to dos: ", todos);
};


// It should have a function to add new todos

var addTodo = function(todoItem){
  todos.push(todoItem);
  displayTodos();
};

// It should have a function to change a todo

var changeTodo = function(position, updatedItem){
  todos[position] = updatedItem;
  displayTodos();
};

// It should have a function to delete a todo

var deleteTodo = function(position){
  todos.splice(position, 1);
  displayTodos();
};
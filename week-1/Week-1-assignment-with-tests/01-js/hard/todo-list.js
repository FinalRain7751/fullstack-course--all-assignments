/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todos = [];

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
    return this.todos;
  }

  update(index, updatedTodo) {
    if (this.#isIndexValid(index)) this.todos[index] = updatedTodo;
    return this.todos;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (this.#isIndexValid(indexOfTodo)) return this.todos[indexOfTodo];
    else return null;
  }

  clear() {
    this.todos = [];
  }

  #isIndexValid(index) {
    const length = this.todos.length;
    if (length === 0) return false;
    if (index > 0) if (index > length - 1) return false;
    if (index < 0) if (index < -length) return false;
    return true;
  }
}

// const todoList = new Todo();

// todoList.add("Task 1");
// todoList.add("Task 2");
// todoList.add("Task 3");

// todoList.remove(1);

// console.log(todoList.todos);

module.exports = Todo;

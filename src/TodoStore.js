/*import { computed, observable, decorate } from "mobx"

class Todo {
 value
 id
 complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export default class TodoStore {
    todos = []
     filter = ""
  computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  createTodo(value) {
    this.todos.push(new Todo(value))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }
}
decorate(TodoStore,{
    value: observable,
    id: observable,
    complete: observable
})
*/

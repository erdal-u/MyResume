import React from "react";
import { observer } from "mobx-react";

const TodoList = observer(
  class extends React.Component {
    createNew(e) {
      if (e.which === 13) {
        this.props.store.createTodo(e.target.value);
        e.target.value = "";
      }
    }

    filter(e) {
      this.props.store.filter = e.target.value;
    }

    toggleComplete(todo) {
      todo.complete = !todo.complete;
    }

    render() {
      const { filter, filteredTodos, todos } = this.props.store;

      const todoLis = filteredTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            onChange={this.toggleComplete.bind(this, todo)}
            value={todo.complete}
            checked={todo.complete}
          />
          <span>{todo.value}</span>
        </li>
      ));
      return (
        <div>
          <h1>todos</h1>
          <input className="new" onKeyPress={this.createNew.bind(this)} />
          <input
            className="filter"
            value={filter}
            onChange={this.filter.bind(this)}
          />
          <ul>{todoLis}</ul>
        </div>
      );
    }
  }
);
export default TodoList;

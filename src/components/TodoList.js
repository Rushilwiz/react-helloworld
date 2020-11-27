import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  state = {
    list: [],
    filter: "all",
  };

  addTodo = (todo) => {
    const newList = [todo, ...this.state.list];
    this.setState({ list: newList });
  };

  toggleComplete = (id) => {
    this.setState({
      list: this.state.list.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      todos: this.state.list.filter((todo) => todo.id !== id),
    }));
  };

  updateFilter = (filter) => {
    this.setState({ filter: filter });
  };

  render() {
    let list = [];
    if (this.state.filter === "all") {
      list = this.state.list;
    } else if (this.state.filter === "complete") {
      list = this.state.list.filter((todo) => todo.complete);
    } else if (this.state.filter === "active") {
      list = this.state.list.filter((todo) => !todo.complete);
    }

    return (
      <div>
        <div>
          todos left: {this.state.list.filter((todo) => !todo.complete).length}
        </div>
        <TodoForm onSubmit={this.addTodo} />
        {list.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDelete={() => this.handleDelete(todo.id)}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}

        <div>
          <button onClick={() => this.updateFilter("active")}>active</button>
          <button onClick={() => this.updateFilter("all")}>all</button>
          <button onClick={() => this.updateFilter("complete")}>
            complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;

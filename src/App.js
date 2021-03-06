import React, {Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';
import uuid from 'uuid';

class App extends Component {
   state = {
      todos: [
         {
            title: 'Take out the trash',
            id: uuid.v4(),
            completed: true
         },
         {
            title: 'Get grocery',
            id: uuid.v4(),
            completed: false
         },
         {
            title: 'Meeting with my adviser',
            id: uuid.v4(),
            completed: false
         }
      ]
   };

   // Toggle Complete
   toggleComplete = (id) => {
      this.setState({
         todos: this.state.todos.map(todo => {
            if (todo.id === id) {
               todo.completed = !todo.completed;
            }
            return todo;
         })
      })
   };

   // Delete Todo
   deleteTodo = (id) => {
      this.setState({
         todos: this.state.todos.filter(todo => todo.id !== id)
      })
   };

   // Add Todo
   addTodo = (title) => {
      const newTodo = {
         id: uuid.v4(),
         title: title,
         complete: false
      };
      this.setState({todos: [...this.state.todos, newTodo]})
   };

   render() {
      return (
         <div className="App">
            <Header/>
            <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
            <br/>
            <AddTodo addTodo={this.addTodo}/>
         </div>
      );
   }
}

export default App;

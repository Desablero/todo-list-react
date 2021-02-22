import React, {Component} from 'react'

import ToDoList from "../todo-list";


import './app.css'

export default class App extends Component {

  render() {
    return(
        <div>
          <ToDoList />
        </div>
    )
  }
}
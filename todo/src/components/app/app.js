import React, {Component} from 'react'
import ToDoList from "../todo-list";
import AddItem from "../add-item";
import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            this.createItem('Git commit'),
            this.createItem('Drink tea'),
            this.createItem('Create ToDo App'),
        ],
    }

    createItem (label) {
        return {
            id: Math.random()*2,
            label: label,
            done: false,
            important: false
    }
}

  render() {

      const onDelete = (id) => {
          this.setState(({todoData}) => {
              const idx = todoData.findIndex(el => el.id === id)
              const oldState = todoData
              const newState = [...oldState.slice(0,idx), ...oldState.slice(idx+1)]
              return {
                  todoData: newState
              }
          })
      }

      const onAddItem = (value) => {
        this.setState(({todoData}) => {
            const oldData = todoData
            const newItem = this.createItem(value)
            const newData = [...oldData, newItem]
            return {
                todoData: newData
            }
          })
      }


    return(
        <div>
            <h1>ToDoList</h1>
            <ToDoList todos={this.state.todoData}
                      onDelete={onDelete}/>
            <AddItem onAddItem={onAddItem}/>
        </div>
    )
  }
}
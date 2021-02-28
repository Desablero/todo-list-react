import React, {Component} from 'react'

import ToDoList from "../todo-list";
import AddItem from "../add-item";
import ItemFilter from "../item-filter";
import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            this.createItem('Git commit'),
            this.createItem('Drink tea'),
            this.createItem('Create ToDo App'),
            ],
        itemStatusFilter: '',
        searchingElement: ''
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

      const onDone = (id) => {
          const idx = this.state.todoData.findIndex(el => el.id === id)
          this.setState(({todoData}) => {
              const newState = todoData
              newState[idx].done = !newState[idx].done
              return {
                  todoData: newState
              }
          })

      }

      const onImportant = (id) => {
          const idx = this.state.todoData.findIndex(el => el.id === id)
          this.setState(({todoData}) => {
              const newState = todoData
              newState[idx].important = !newState[idx].important
              return {
                  todoData: newState
              }
          })
      }

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

      const onChangeFilter = (filter) => {
          this.setState(({itemStatusFilter}) => {
              return {itemStatusFilter: filter}
          })
      }

      const onSearchElement = (value) => {
            this.setState(({searchingElement}) => {
                return {
                    searchingElement: value
                }
          })
      }


    return(
        <div>
            <h1>ToDoList</h1>
            <ItemFilter onChangeFilter={onChangeFilter}
                        onSearchElement={onSearchElement}/>
            <ToDoList todos={this.state.todoData}
                      onDone={onDone}
                      onImportant={onImportant}
                      onDelete={onDelete}
                      itemStatusFilter={this.state.itemStatusFilter}
                      searchingElement={this.state.searchingElement}
            />
            <AddItem onAddItem={onAddItem}/>
        </div>
    )
  }
}
import React, {Component} from 'react'
import ToDoItem from "../todo-item";

export default class ToDoList extends Component {

    render() {
        const {todos, onDelete, onImportant} = this.props

        const element = todos.map((item) => {
                return <ToDoItem onDelete={onDelete}
                                 onImportant={onImportant}
                                 key={item.id}
                                 {...item}/>
            })

        return (
            <div>
                {element}
            </div>
        )
    }
}
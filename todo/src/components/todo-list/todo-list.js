import React, {Component} from 'react'
import ToDoItem from "../todo-item";

export default class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </div>
        )
    }
}
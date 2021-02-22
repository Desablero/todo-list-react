import React, {Component} from 'react'

export default class ToDoItem extends Component {
    render() {

        const {id, label, onDelete} = this.props



        return (
            <div>
                <li> {label} </li>
                <button>Imp</button>
                <button onClick={() => {onDelete(id)}}>Del</button>
            </div>
        )
    }
}
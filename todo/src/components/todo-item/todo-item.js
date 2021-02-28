import React, {Component} from 'react'
import './todo-item.css'

export default class ToDoItem extends Component {

    render() {

        const {id, label, onDelete, onDone, onImportant} = this.props
        const {important, done} = this.props

        let clazzName
        let styleItem

        if (important) {
            styleItem = {
                color: 'red',
                fontSize: 20
            }
        }
        if (done) {
            clazzName = 'todo-item-done'
        }

        return (
            <div>
                <span style={styleItem} className={clazzName}
                        onClick={() => onDone(id)}> {label} </span>
                <button onClick={() => onImportant(id)}>!</button>
                <button onClick={() => {onDelete(id)}}>Del</button>
            </div>
        )
    }
}
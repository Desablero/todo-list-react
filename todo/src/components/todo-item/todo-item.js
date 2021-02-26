import React, {Component} from 'react'
import './todo-item.css'

export default class ToDoItem extends Component {

    render() {

        const {id, label, onDelete, onDone, onImportant} = this.props
        const {important, done} = this.props

        let clazzName = 'todo-item'


        if (important) {
            clazzName += '-important'
        }
        if (done) {
            clazzName += '-done'
        }

        return (
            <div>
                <span className={clazzName}
                        onClick={() => onDone(id)}> {label} </span>
                <button onClick={() => onImportant(id)}>!</button>
                <button onClick={() => {onDelete(id)}}>Del</button>
            </div>
        )
    }
}
import React, {Component} from 'react'
import './todo-item.css'

export default class ToDoItem extends Component {

    state = {
        important: false,
        done: false
    }

    render() {

        const {id, label, onDelete} = this.props
        const {important, done} = this.state

        let clazzName = 'todo-item'

        const onImportant = () => {
            this.setState(({important}) => {
                console.log(important)
                return {
                    important: !important
                }
            })
        }

        if (important) {
            clazzName += '-important'
        }

        return (
            <div>
                <span className={clazzName}> {label} </span>
                <button onClick={onImportant}>!</button>
                <button onClick={() => {onDelete(id)}}>Del</button>
            </div>
        )
    }
}
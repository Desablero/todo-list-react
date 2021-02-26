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
                return {
                    important: !important
                }
            })
        }
        const onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                }
            })
        }


        if (important) {
            clazzName += '-important'
        }
        if (done) {
            clazzName += '-done'
        }

        return (
            <div>
                <span className={clazzName}
                        onClick={onLabelClick}> {label} </span>
                <button onClick={onImportant}>!</button>
                <button onClick={() => {onDelete(id)}}>Del</button>
            </div>
        )
    }
}
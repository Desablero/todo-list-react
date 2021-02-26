import React, {Component} from 'react'
import ToDoItem from "../todo-item";

export default class ToDoList extends Component {

    render() {
        const {todos, onDelete, itemStatusFilter,
                onDone, onImportant} = this.props

        const element = todos
            .filter((el) => {
                if(itemStatusFilter === 'done') {
                    return el.done
                }
                if(itemStatusFilter === 'important') {
                    return el.important
                } else return el
            })
            .map((item) => {
                return <ToDoItem onDelete={onDelete}
                                 onDone={onDone}
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
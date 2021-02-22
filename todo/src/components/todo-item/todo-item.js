import React, {Component} from 'react'

export default class ToDoItem extends Component {
    render() {

        const {label} = this.props

        return (
            <div>
                <li> {label} </li>
            </div>
        )
    }
}
import React, {Component} from 'react'

export default class ItemFilter extends Component {


    render() {

        const {onChangeFilter} = this.props

        const onChangeInput = () => {

        }

        const onChangeButton = (filter) => {
            onChangeFilter(filter)
        }

        return (
            <div>
                <input type="text"
                       placeholder='Найти элемент'
                       onChange={onChangeInput}

                />
                <button onClick={() => {onChangeButton('all')}}>All</button>
                <button onClick={() => {onChangeButton('done')}}>Done</button>
                <button onClick={() => {onChangeButton('important')}}>Important</button>
            </div>
        )
    }
}

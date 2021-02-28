import React, {Component} from 'react'

export default class ItemFilter extends Component {

    state = {
        inputValue: ''
    }


    render() {

        const {onChangeFilter, onSearchElement} = this.props

        const onChangeInput = (e) => {
            e.preventDefault()
            const value = e.target.value
            this.setState(() => {
                return {inputValue: value}
            })
            onSearchElement(this.state.inputValue)

        }


        const onChangeButton = (filter) => {
            onChangeFilter(filter)
        }


        return (
            <div>

                <input type="text"
                       placeholder='Найти элемент'
                       onChange={onChangeInput}
                       value={this.state.inputValue}

                />
                <button onClick={() => {onChangeButton('all')}}>All</button>
                <button onClick={() => {onChangeButton('done')}}>Done</button>
                <button onClick={() => {onChangeButton('important')}}>Important</button>
            </div>
        )
    }
}

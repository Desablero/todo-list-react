import React, {Component} from 'react'

export default class ItemFilter extends Component {

    state = {
        inputValue: ''
    }


    render() {

        const {onChangeFilter, onSearchElement} = this.props

        const onChangeInput = (e) => {
            const value = e.target.value
            this.setState(() => {
                return {inputValue: value}
            })
        }

        const onSubmit = (e) => {
            e.preventDefault()
            onSearchElement(this.state.inputValue)
            this.setState(() => {
                return {inputValue: ''}
            })
        }

        const onChangeButton = (filter) => {
            onChangeFilter(filter)
        }


        return (
            <div>
                <form onSubmit={onSubmit}>
                <input type="text"
                       placeholder='Найти элемент'
                       onChange={onChangeInput}
                       value={this.state.inputValue}

                />
                <button onClick={() => {onChangeButton('all')}}>All</button>
                <button onClick={() => {onChangeButton('done')}}>Done</button>
                <button onClick={() => {onChangeButton('important')}}>Important</button>
                </form>
            </div>
        )
    }
}

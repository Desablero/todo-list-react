import React, {Component} from 'react'

export default class AddItem extends Component{

    state = {
        label: ''
    }

    onChangeItem (event) {
        const input = event.target.value
        this.setState(
            {label: input}
        )
    }

    render() {

        const {onAddItem} = this.props

        const onSubmit = (e) => {
            e.preventDefault()
            onAddItem(this.state.label)
            this.setState({label: ''})
        }

        return (
            <form onSubmit={onSubmit}>
                <input type='text'
                       placeholder="Добавить элемент"
                       value={this.state.label}
                       onChange={this.onChangeItem.bind(this)}
                />
                <button>Add Item</button>
            </form>
        )
    }
}
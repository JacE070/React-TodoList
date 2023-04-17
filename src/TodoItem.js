import React, { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editedText: props.text,
        };
    }

    toggleEditing = () => {
        this.setState((prevState) => ({
            isEditing: !prevState.isEditing,
        }));
    };

    handleInputChange = (e) => {
        this.setState({
            editedText: e.target.value,
        });
    };

    handleSave = () => {
        this.props.update(this.props.keyValue, this.state.editedText);
        this.toggleEditing();
    };

    render() {
        const { isEditing, editedText } = this.state;
        const { delete: deleteItem, keyValue } = this.props;

        return (
            <li>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={this.handleInputChange}
                        onBlur={this.handleSave}
                    />
                ) : (
                    <span onClick={this.toggleEditing}>{this.props.text}</span>
                )}
                <button onClick={() => deleteItem(keyValue)}>Delete</button>
            </li>
        );
    }
}

export default TodoItem;

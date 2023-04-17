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

    priorityStyle(priority) {
        switch (priority) {
            case "1":
                return "high-priority";
            case "2":
                return "medium-priority";
            case "3":
                return "low-priority";
            default:
                return "";
        }
    }

    render() {
        const { isEditing, editedText } = this.state;
        const { delete: deleteItem, keyValue } = this.props;
        const priorityClass = this.priorityStyle(this.props.priority);

        return (
            <li className={priorityClass}>
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

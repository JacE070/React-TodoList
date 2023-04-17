import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem),
                };
            });

            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return item.key !== key;
        });

        this.setState({
            items: filteredItems,
        });
    }

    updateItem(key, updatedText) {
        const updatedItems = this.state.items.map((item) => {
            if (item.key === key) {
                return { ...item, text: updatedText };
            }
            return item;
        });
        this.setState({ items: updatedItems });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => (this._inputElement = a)}
                            placeholder="enter task"
                        ></input>
                        <button type="submit">add</button>
                    </form>
                    <TodoItems
                        entries={this.state.items}
                        delete={this.deleteItem}
                        update={this.updateItem}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;

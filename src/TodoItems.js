import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItems extends Component {
    render() {
        const { entries, delete: deleteItem, update } = this.props;
        const listItems = entries.map((item) => (
            <TodoItem
                key={item.key}
                keyValue={item.key}
                text={item.text}
                delete={deleteItem}
                update={update}
            />
        ));

        return <ul className="theList">{listItems}</ul>;
    }
}

export default TodoItems;

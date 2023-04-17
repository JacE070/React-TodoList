import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItems extends Component {
    render() {
        const { entries, delete: deleteItem, update } = this.props;
        const sortedEntries = entries.sort((a, b) => a.priority - b.priority);

        const listItems = sortedEntries.map((item) => (
            <TodoItem
                key={item.key}
                keyValue={item.key}
                text={item.text}
                priority={item.priority}
                delete={deleteItem}
                update={update}
            />
        ));

        return <ul className="theList">{listItems}</ul>;
    }
}

export default TodoItems;

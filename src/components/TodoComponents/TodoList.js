// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoItems.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-button" onClick={() => props.clearCompleted()}>
                Clear Finished Tasks
            </button>
        </div>
    )
}

export default TodoList;
import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {id, title, handleDelete, handleEdit} = this.props;

        return (
            <li key={id} className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6 >Title : {title}</h6>
                <div className="todo-icon">
                    <span onClick={handleEdit} className="mx-2 text-success"><i className="fas fa-pen"></i></span>
                    <span onClick={handleDelete} className="mx-2 text-danger"><i className="fas fa-trash"></i></span>
                </div>
            </li>
        )
    }
}

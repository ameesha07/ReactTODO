import React, { Component } from 'react'

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false,
        };
    }
    setEditingState = (isEditing) => {
        this.setState({ isEditing: isEditing });
    };
    toggleTask = () => {
        this.props.toggleTask(this.props.id);
    };
    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    };
    handleChange = (event) => {
        this.setState({ task: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    };
    render() {
        return (
            <tr>
                {this.state.isEditing ? (
                    <>
                        <td>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    value={this.state.task}
                                    onChange={this.handleChange}
                                    autoFocus
                                    data-testid='edit-task'
                                />
                            </form>
                        </td>
                        <td>
                            <button
                                className='save'
                                onClick={this.handleSubmit}
                                type="submit"
                                data-testid="save-button"
                            >
                                Save
                            </button>
                            <button
                                className='back'
                                onClick={() => this.setEditingState(false)}
                                type="button"
                                data-testid="back-button"
                            >
                                Back
                            </button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className="task" onClick={this.toggleTask}>
                            <input
                                type={"checkbox"}
                                readOnly
                                checked={this.props.taskItem.isCompleted}
                                data-testid="toggle-button"
                            />
                            <span
                                data-testid={this.props.id}
                                className={
                                    this.props.taskItem.isCompleted
                                        ? "complete"
                                        : " not-completed"
                                }
                            >
                                {this.props.taskItem.task}
                            </span>
                        </td>
                        <td>
                            <button
                                className='edit'
                                onClick={() => this.setEditingState(true)}
                                data-testid="edit-button"
                            >
                                Edit
                            </button>
                            <button className='delete' onClick={this.deleteTask} data-testid="delete-button">Delete</button>
                        </td>
                    </>
                )}
            </tr>
        );
    }
}

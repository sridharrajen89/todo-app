import PropTypes from 'prop-types';

function TodoItem({ task, deleteTaskCallback, toggleTaskCallback }) {

    function handleChange() {
        toggleTaskCallback(task.id);
    }

    return (
        <li aria-label="task" >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <span className="text">{task.text}</span>
            <button
                type="button"
                aria-label="Delete task"
                className="delete-button"
                onClick={() => deleteTaskCallback()}>
                delete
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    deleteTaskCallback: PropTypes.func.isRequired,
};

export default TodoItem;
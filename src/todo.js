import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";
import TodoItem from './todo-item';
import './todo.css'

// const initialTasks = [
//     { id: window.self.crypto.randomUUID(), text: 'Drink some coffee', completed: true },
//     { id: window.self.crypto.randomUUID(), text: 'Create a TODO app', completed: false },
//     { id: window.self.crypto.randomUUID(), text: 'Drink some more coffee', completed: false }
// ];

function Todo() {
    const tasks = useSelector((state) => state.todos);
    const [newTaskText, setNewTaskText] = useState("");
    const dispatch = useDispatch();

    function handleInputChange(event) {
        setNewTaskText(event.target.value);
    }

    function addTask(newTask) {
        if (newTask.trim() !== "") {
            dispatch(addTodo(newTask));
            setNewTaskText("");
        }
    }

    function deleteTask(id) {
        dispatch(deleteTodo(id));
    }

    function toggleTask(id) {
        console.log(id);
        dispatch(toggleComplete(id));
    }

    return (
        <article
            className="todo-list"
            aria-label="task list manager">
            <header>
                <h1>TODO LIST</h1>
                <form className="todo-input" onSubmit={addTask} aria-controls="todo-list">
                    <input
                        type="text"
                        required
                        autoFocus
                        placeholder="Enter a task"
                        value={newTaskText}
                        aria-label="Task text"
                        onChange={handleInputChange} />
                    <button
                        className="add-button"
                        aria-label="Add task"
                        onClick={() => addTask(newTaskText)}>
                        Add
                    </button>
                </form>
            </header>
            <ol id="todo-list" aria-live="polite">
                {tasks.map((task) => {
                    if (!task.completed) {
                        return <TodoItem
                            task={task}
                            deleteTaskCallback={() => deleteTask(task.id)}
                            toggleTaskCallback={toggleTask}
                        />
                    }
                    return <div></div>
                }
                )}
            </ol>
        </article>
    )

}

export default Todo;
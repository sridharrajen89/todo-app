import { useState } from 'react';
import TodoItem from './todo-item';
import './todo.css'

const initialTasks = [
    { id: window.self.crypto.randomUUID(), text: 'Drink some coffee', completed: true },
    { id: window.self.crypto.randomUUID(), text: 'Create a TODO app', completed: false },
    { id: window.self.crypto.randomUUID(), text: 'Drink some more coffee', completed: false }
];

function Todo() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskText, setNewTaskText] = useState("");

    function handleInputChange(event) {
        setNewTaskText(event.target.value);
    }

    function addTask(newTask) {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { id: window.self.crypto.randomUUID(), text: newTask, completed: false }]);
            setNewTaskText("");
        }
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    function toggleTask(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
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
                {tasks.map((task) =>
                    <TodoItem
                        key={task.id}
                        task={task.text}
                        deleteTaskCallback={() => deleteTask(task.id)}
                        toggleTaskCallback={toggleTask}
                    />
                )}
            </ol>
        </article>
    )

}

export default Todo;
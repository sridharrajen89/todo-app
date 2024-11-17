import { useState } from 'react';
import TodoItem from './todo-item';

const initialTasks = [
    { id: window.self.crypto.randomUUID(), text: 'Drink some coffee', completed: true },
    { id: window.self.crypto.randomUUID(), text: 'Create a TODO app', completed: false },
    { id: window.self.crypto.randomUUID(), text: 'Drink some more coffee', completed: false }
];


function History() {

    const [tasks, setTasks] = useState(initialTasks);

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
            aria-label="task list history">
            <header>
                <h1>TODO HISTORY</h1>
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

export default History;
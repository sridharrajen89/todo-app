import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./todoSlice";
import TodoItem from './todo-item';

function History() {

    const tasks = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    function deleteTask(id) {
        dispatch(deleteTodo(id));
    }

    function toggleTask(id) {
        dispatch(toggleComplete(id));
    }

    return (
        <article
            className="todo-list"
            aria-label="task list history">
            <header>
                <h1>TODO HISTORY</h1>
            </header>
            <ol id="todo-list" aria-live="polite">
                {tasks.map((task) => {
                    if (task.completed) {
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

export default History;
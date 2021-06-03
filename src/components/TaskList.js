import Task from './Task';

const TaskList = props => {

    const activeTasks = props.tasks.filter(task => task.active);
    const doneTasks = props.tasks.filter(task => !task.active);

    return (
        <>
            <h1>Zadania do zrobienia</h1>
            <ul className="active">
                {activeTasks.map(task => (
                <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
                ))}
            </ul>
            <h2>Zadania zrobione (1) </h2>
            <ul className="done">
                {doneTasks.map(task => (
                <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
                ))}
            </ul>
        </>
    )
}

export default TaskList;
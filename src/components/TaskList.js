import Task from './Task';

const TaskList = props => {

    const activeTasks = props.tasks.filter(task => task.active);
    const doneTasks = props.tasks.filter(task => !task.active);
    const activeTasksToReturn = activeTasks.map(task => (
        <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
        ))
    const doneTasksToReturn = doneTasks.map(task => (
        <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
        ))

    return (
        <>
            <hr />
            <h1>Zadania do zrobienia</h1>
            <ul className="active">
                {activeTasksToReturn.length > 0 ? activeTasksToReturn : <p>Nie masz zadań do wykonania</p>}
            </ul>
            <hr />
            <h2>Zadania zrobione ({doneTasksToReturn.length}) </h2>
            <ul className="done">
                {doneTasksToReturn.length > 5 && <span style={{ fontSize: 10 }}>Wyświetlonych jest tylko 5 ostatnio zrobionych zadań</span>}
                {doneTasksToReturn.slice(0,5)}
            </ul>
        </>
    )
}

export default TaskList;
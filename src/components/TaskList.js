import Task from './Task';

const TaskList = props => {

    const activeTasks = props.tasks.filter(task => task.active);
    const doneTasks = props.tasks.filter(task => !task.active);

    if (doneTasks.length>=2) {
        doneTasks.sort((a,b) => b.finishDate - a.finishDate)
    }

    if (activeTasks.length>=2) {
       activeTasks.sort((a,b) => a.text.localeCompare(b.text))
    }
    

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
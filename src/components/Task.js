import './Task.css';

const Task = props => {

    const { text, date, id } = props.task;

    return (
        <li className="task">
            <p>
                <strong>{text}</strong> - do <span>{date} </span>
                <button onClick={() => props.change(id)}>Zrobione</button>
                <button onClick={() => props.delete(id)}>x</button>
            </p>    
        </li>
    )
}

export default Task;
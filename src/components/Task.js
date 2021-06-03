import './Task.css';

const Task = props => {

    const importantStyle = {
        color: 'red',
    }
    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <li className="task">
                <p>
                    <strong style={important ? importantStyle : null}>{text}</strong> - do <span>{date} </span>
                    <button onClick={() => props.change(id)}>Zrobione</button>
                    <button onClick={() => props.delete(id)}>x</button>
                </p>    
            </li>
        )
    } else {

        const finish = new Date(finishDate).toLocaleString();
        return (
            <li className="task">
                <p>
                    <strong>{text}</strong><em> (zrobić do: {date}) </em>
                    <br/>
                    - zrobione <span>{finish} </span>
                    <button onClick={() => props.change(id)}>Cofnij</button>
                    <button onClick={() => props.delete(id)}>x</button>
                </p>    
            </li>
        )
    }

    
}

export default Task;
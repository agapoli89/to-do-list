import { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: "",
        checked: false,
        date: "2021-06-03",
    }

    render() {
        return (
            <form className="form">
                <label htmlFor="name"><input type="text" placeholder="dodaj zadanie" id="name" value={this.state.text}/></label>
                <label htmlFor="important"><input type="checkbox" checked={this.state.checked} id="important"/> Priorytet</label>
                <br />
                <label htmlFor="date">Do kiedy zrobić: <input type="date" id="date" value={this.state.date} min="2021-06-03" max="2022-12-31"/></label>
                <br />
                <button>DODAJ</button>
            </form>
        )
    }
}

export default AddTask;
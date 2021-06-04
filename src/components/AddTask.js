import { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10);
    state = {
        text: "",
        checked: false,
        date: this.minDate,
    }

    handleText = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleDate = e => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClick = e => {
        const { text, checked, date } = this.state

        if (text.length>2) {
            const add = this.props.add(text, checked, date);

            if (add) {
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            alert('Za krótka nazwa');
            return;
        }
        
    }

    render() {
        let maxDate = Number(this.minDate.slice(0,4)) + 1;
        maxDate = maxDate+"-12-31";

        return (
            <div className="form">
                <label htmlFor="name"><input type="text" placeholder="dodaj zadanie" id="name" value={this.state.text} onChange={this.handleText}/></label>
                <label htmlFor="important"><input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/> Priorytet</label>
                <br />
                <label htmlFor="date">Do kiedy zrobić: <input type="date" id="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/></label>
                <br />
                <button onClick={this.handleClick}>DODAJ</button>
            </div>
        )
    }
}

export default AddTask;
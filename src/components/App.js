import './App.css';
import { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'uśmiechnij się :)',
        date: '2021-06-03',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'dostać pracę w IT',
        date: '2021-08-16',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'zrobić naleśniki',
        date: '2021-06-03',
        important: false,
        active: false,
        finishDate: '2021-06-03',
      }
    ]
  }

  deleteTask = id => {
    console.log('delete' + id);
  }

  changeTaskStatus = id => {
    console.log('change' + id);
  }



  render() {
    return (
      <div className="App">
        app
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    )
  }
}

export default App;

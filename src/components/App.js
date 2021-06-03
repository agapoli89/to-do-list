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
        active: true,
        finishDate: null,
      }
    ]
  }

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index,1);

    this.setState({
      tasks,
    })
  }

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);

    tasks[index].active = !tasks[index].active;
    tasks[index].finishDate = new Date().getTime();

    this.setState({
      tasks,
    })
  }



  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    )
  }
}

export default App;

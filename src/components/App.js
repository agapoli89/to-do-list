import './App.css';
import { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <AddTask />
        <TaskList />
      </div>
    )
  }
}

export default App;

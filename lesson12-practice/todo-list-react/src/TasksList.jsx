import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';

// const baseUrl = 'https://63b4cded0f49ecf50894549c.mockapi.io/tasks';

class TasksList extends Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Pick up Tom from airport', done: false, id: 2 },
      { text: 'Visit party', done: false, id: 3 },
      { text: 'Visit doctor', done: true, id: 4 },
      { text: 'Buy meat', done: true, id: 5 },
    ],
  };

  onCreate = text => {
    // 1. create task object
    // 2. post object to server
    // 3. fetch list from server
    const { tasks } = this.state;
    const newTask = {
      text,
      done: false,
    };

    // fetch(baseUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;utc-8',
    //   },
    //   body: JSON.stringify(newTask),
    // }).then(responce => {
    //   if (responce.ok) {
    //     fetch(baseUrl)
    //       .then(res => {
    //         if (res.ok) {
    //           return responce.json();
    //         }
    //       })
    //       .then(tasksList => {
    //         this.setState({
    //           tasks: tasksList,
    //         });
    //       });
    //   }
    //   throw new Error('Failed to create task');
    // });

    const updatedTasks = tasks.concat(newTask);
    this.setState({
      tasks: updatedTasks,
    });
  };

  handleTaskStatusChange = id => {
    // 1. find task in a list
    // 2. toggle done value
    // 3. save updated list

    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    this.setState({
      tasks: updatedTasks,
    });
  };

  handleTaskDelete = id => {
    // 1. filter tasks
    // 2. update state

    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;

import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, deleteTask, fetchTasksList, updateTask } from './TasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    // 1. create task object
    // 2. post object to server
    // 3. fetch list from server

    // const { tasks } = this.state;
    const newTask = {
      text: text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());

    // const updatedTasks = tasks.concat(newTask);
    // this.setState({
    //   tasks: updatedTasks,
    // });
  };

  handleTaskStatusChange = id => {
    // 1. find task in a list
    // 2. toggle done value
    // 3. save updated list

    // 1. find task in state by id
    // 2. create updated task
    // 3. update task on server
    // 4. fetch updated list

    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());

    // {
    //   if (task.id === id) {
    //     return { ...task, done: !task.done };
    //   }
    //   return task;
    // });

    // this.setState({
    //   tasks: updatedTasks,
    // });
  };

  handleTaskDelete = id => {
    // 1. filter tasks
    // 2. update state

    deleteTask(id).then(() => this.fetchTasks());

    //     const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    //     this.setState({
    //       tasks: updatedTasks,
    //     });
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

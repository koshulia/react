const baseUrl = 'https://63b4cded0f49ecf50894549c.mockapi.io/tasks';

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Failed to create task');
    }
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Failed to change task status');
    }
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(responce => {
    if (!responce.ok) {
      throw new Error('Failed to delete task');
    }
  });
};

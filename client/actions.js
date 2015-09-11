import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const CREATE_TASK = 'CREATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_TASK_STATUS = 'SET_TASK_STATUS';

export function requestTasks() {
  return { type: REQUEST_TASKS }
}

export function receiveTasks(tasks) {
  return { type: RECEIVE_TASKS, tasks};
}

export function fetchTasks() {
  return function (dispatch) {
    dispatch(requestTasks());
    return fetch('/tasks')
      .then(res => res.json())
      .then(tasks => dispatch(receiveTasks(tasks)));
  };
}
export function createTask(name) {
  return { type: CREATE_TASK, name };
}

export function removeTask(id) {
  return { type: REMOVE_TASK, id };
}

export function setTaskStatus(id, status) {
  return { type: SET_TASK_STATUS, id, status };
}


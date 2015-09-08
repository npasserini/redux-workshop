import { REQUEST_TASKS, RECEIVE_TASKS, CREATE_TASK, REMOVE_TASK, SET_TASK_STATUS } from './actions';
import { Statuses } from './constants';

export function tasks(state = [], action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case CREATE_TASK:
      return [...state, {name: action.name, status: Statuses.NOT_STARTED}];
    case REMOVE_TASK:
      return [...state.slice(0, action.id),
        ...state.slice(action.id+1)];
    case SET_TASK_STATUS:
      return [...state.slice(0, action.id),
        {...state[action.id], status: action.status },
        ...state.slice(action.id+1)];
    default:
      return state;
  }
}

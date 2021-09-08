import {
  ADD_TASK,
  CHECKED_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../constants/task";

export const add_task = (task) => {
  return { type: ADD_TASK, payload: task };
};

export const edit_task = (id, description) => {
  return { type: EDIT_TASK, payload: { id, description } };
};

export const chaecked_task = (id) => {
  return { type: CHECKED_TASK, payload: id };
};

export const delete_task = (id) => {
  return { type: DELETE_TASK, payload: id };
};

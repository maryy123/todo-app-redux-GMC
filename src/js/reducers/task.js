import {
  ADD_TASK,
  CHECKED_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../constants/task";

const initialState = {
  tasks: [{ id: Math.random(), description: "task1", isDone: true }],
};

export const handleTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case EDIT_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((el) => {
            if (el.id === action.payload.id) {
              return { ...el, description: action.payload.description };
            }
            return el;
          }),
        ],
      };
    case CHECKED_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((el) => {
            if (el.id === action.payload) {
              return { ...el, isDone: !el.isDone };
            }
            return el;
          }),
        ],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((el) => el.id !== action.payload)],
      };
    default:
      return state;
  }
};

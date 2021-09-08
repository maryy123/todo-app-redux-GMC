import React from "react";
import { useDispatch } from "react-redux";
import { chaecked_task, delete_task } from "../js/actions/task";
import TaskModal from "./TaskModal";
import "./Task.css";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const styleDone = el.isDone ? { textDecoration: "line-through" } : null;

  return (
    <div className="item">
      <p style={styleDone} className="text">
        {el.description}
      </p>
      <div className="buttonSection">
        <TaskModal el={el} />
        <button onClick={() => dispatch(chaecked_task(el.id))}>
          {el.isDone ? "UNDONE" : "DONE"}
        </button>
        <button onClick={() => dispatch(delete_task(el.id))}>DELETE</button>
      </div>
    </div>
  );
};

export default Task;

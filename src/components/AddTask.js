import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_task } from "../js/actions/task";
import "./AddTask.css";
const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch(add_task);
  let handleSubmit = () => {
    if (description) {
      dispatch(add_task({ id: Math.random(), description, isDone: false }));
      setDescription("");
    } else alert("Added task should not be empty!!!");
  };
  return (
    <form>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        +
      </button>
    </form>
  );
};

export default AddTask;

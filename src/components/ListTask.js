import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleFilter } from "../js/reducers/filter";
import Filter from "./Filter";
import Task from "./Task";
import "./ListTask.css";

const ListTask = () => {
  const tasks = useSelector((state) => state.handleTask.tasks);
  const [filter, setFilter] = useState("ALL");
  const t = handleFilter(tasks, filter);

  return (
    <div className="container">
      <Filter setFilter={setFilter} filter={filter} />
      <div className="list">
        {t.map((el) => {
          return <Task el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};

export default ListTask;

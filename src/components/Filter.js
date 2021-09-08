import React from "react";
import "./Filter.css";
const Filter = ({ filter, setFilter }) => {
  const styleAll =
    filter === "ALL" ? { background: "#851e3e", color: "white" } : null;
  const styleDone =
    filter === "DONE" ? { background: "#851e3e", color: "white" } : null;
  const styleUndone =
    filter === "UNDONE" ? { background: "#851e3e", color: "white" } : null;
  return (
    <div className="buttonFilter">
      <button style={styleAll} onClick={() => setFilter("ALL")}>
        ALL
      </button>
      <button style={styleDone} onClick={() => setFilter("DONE")}>
        DONE
      </button>
      <button style={styleUndone} onClick={() => setFilter("UNDONE")}>
        UNDONE
      </button>
    </div>
  );
};

export default Filter;

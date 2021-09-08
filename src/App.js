import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <p className="title">My TODO App </p>
      <div className="App-div">
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
}

export default App;

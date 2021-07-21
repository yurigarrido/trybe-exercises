import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arr = [1, 2, 3, 4, 5, 6]

function App() {
  return (
    <ol>{arr.map((item) => Task(item))}</ol>
  );
}

export default App;

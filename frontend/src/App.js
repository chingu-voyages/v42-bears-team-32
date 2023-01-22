import "./App.css";

import Filters from "./components/filters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className="text-amber-200 text-5xl">Hello World</h1> */}
        <Filters />
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import SearchAppBar from "./components/SearchBar";
import Flights from "./redux/flights/Flights";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Flights />
    </div>
  );
}

export default App;

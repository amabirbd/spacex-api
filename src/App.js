import "./App.css";
import SearchAppBar from "./components/SearchBar";
import SearchByDate from "./components/SearchByDate";
import SearchByLaunchStatus from "./components/SearchByLaunchStatus";
import Flights from "./redux/flights/Flights";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      {/* <div className="filter">
        <SearchByDate />
        <SearchByLaunchStatus />
      </div> */}
      <Flights />
    </div>
  );
}

export default App;

import "./App.css";
import Icon from "./img/013-sun.png";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Description from "./Description";

function App() {
  return (
    <div className="App">
      <div id="weather-app">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Search />
              <City />
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-8">
                  <Temperature />
                </div>
                <div className="col-4 temp-icon">
                  <img id="current-temp-icon" src={Icon} alt="sunny" />
                </div>
              </div>
              <Description />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

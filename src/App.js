import "./App.css";
import Expo from "./components/Expo/expo";
import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutme";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Home">
        <Home />
      </div>
      <AboutMe />
      {/* <Expo />*/}
    </div>
  );
}

export default App;

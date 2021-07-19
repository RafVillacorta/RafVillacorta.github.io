import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Exhibitions from "./Exhibitions.js";
import Search from "./Search.js";
import Store from "./Store.js";
import Feedback from "./Feedback.js";
import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [text, setText] = useState("fr");
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
        if (text === "fr") {
          setLanguage("fr"); 
          setText("en");
        } else {
          setLanguage("en");
          setText("fr");
        }
    }
  return (
    <Router>
      <div className="App">
        <button className="language" onClick={toggleLanguage}>{text}</button>
        <Navbar language={language}/> {"\nbr \n"}
        <Switch>
          <Route exact path="/">
            <Home language={language}/>
          </Route>
          <Route exact path="/Exhibitions">
            <Exhibitions language={language}/>
          </Route>
          <Route exact path="/Search">
            <Search language={language}/>
          </Route>
          <Route exact path="/Store">
            <Store language={language}/>
          </Route>
          <Route exact path="/Feedback">
            <Feedback language={language}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

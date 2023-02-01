import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home, About, Contact, Articel } from "./pages/index";
import "./bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />

          <Route path="/articles/:id" component={Articel} />

          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

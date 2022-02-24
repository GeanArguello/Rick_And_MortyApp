import { Fragment } from "react";

import { Navegacion } from "./components/Navegacion";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { InfoPersonaje } from "./views/InfoPersonaje";

import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navegacion title={"Rick And Morty APP"} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/personaje/:id" component={InfoPersonaje} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

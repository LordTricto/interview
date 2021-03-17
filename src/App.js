import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";

const initialStore = {
  data: [],
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Provider store={store}>
            <Route path="/products" component={Products} />
          </Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;

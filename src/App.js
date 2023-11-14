import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import DummyComponent from "./components/DummyComponent";
import routes from "./tabs.json";

function App() {
  const sorted = routes.sort((a, b) => a.order - b.order);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dummy project</h1>
        <nav>
          {sorted.map(({ id, title, order }) => (
            <NavLink to={order === 0 ? "/" : id} key={id}>
              {title}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="Main">
        <Routes>
          {routes.map(({ id, order, path }) => (
            <Route
              path={order === 0 ? "/" : id}
              element={<DummyComponent path={path} />}
              key={id}
            />
          ))}
        </Routes>
      </div>
     
    </div>
  );
}

export default App;

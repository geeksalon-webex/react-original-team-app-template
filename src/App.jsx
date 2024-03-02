import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NoMatch } from "./components/404/NoMatch";
import { Navigation } from "./components/Navigation";
import { HomeRoute } from "./components/root/HomeRoute";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<HomeRoute />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import CountriesPage from "./pages/CountriesPage";

function App() {
  library.add(faCompass);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<CountriesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

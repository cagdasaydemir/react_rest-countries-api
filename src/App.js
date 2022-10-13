import "./App.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
  
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  library.add( faCompass)
  return (
    <>
    <Header/>
    <Filter/>
    <Countries />
    </>
  );
}

export default App;

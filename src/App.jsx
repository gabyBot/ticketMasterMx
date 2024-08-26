import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Events from "./components/events";

function App() {
  const [searchVal, setSearchVal] = useState('');

  const handleNavBarSearch = (value) => {
    setSearchVal(value);
  };
  return (
    <>
      <Navbar onSearch={handleNavBarSearch} />
      <Events searchValue={searchVal} />
      
    </>
  );
}

export default App;

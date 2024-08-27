import Navbar from "../../components/navbar";
import Events from "../../components/events";
import { useState } from "react";

const Home = () => {
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
};

export default Home;

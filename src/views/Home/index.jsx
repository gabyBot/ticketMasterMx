import Navbar from "../../components/navbar";
import Events from "../../components/events";
import { useEffect, useState } from "react";
import useEventData from "../../hooks/useEventsData";

const Home = () => {
  const { events, fetchEvents } = useEventData();
  const [searchVal, setSearchVal] = useState('');

  const handleNavBarSearch = (value) => {
    setSearchVal(value);
  };

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      <Navbar onSearch={handleNavBarSearch} />
      <Events searchValue={searchVal} events={events} />
    </>
  );
};

export default Home;

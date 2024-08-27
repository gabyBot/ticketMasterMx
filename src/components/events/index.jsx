import EventsItems from "./Components/EventsItems";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Events = ({ searchValue, events }) => {
  const navigate = useNavigate(); 

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events; 
    // eslint-disable-next-line react/prop-types
    const search = searchValue ? searchValue.toLowerCase() : '';

    if (search.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) => 
        item.name.toLowerCase().includes(search)
      );
    }

    if (eventsFiltered.length === 0) {
      return <p>No hay eventos disponibles</p>;
    }

    return eventsFiltered.map((eventsItems) => (
      <EventsItems
        key={`event-item-${eventsItems.id}`}
        name={eventsItems.name}
        type={eventsItems.type}
        info={eventsItems.info}
        image={eventsItems.images[0].url}
        oneEventClick={() => handleEventItemClick(eventsItems.id)}
        id={eventsItems.id}
      />
    ));
  };

  return (
    <div>
      <h2>¡Eventos México!</h2>
      {renderEvents()}
    </div>
  );
};

export default Events;

import EventsItems from "./Components/EventsItems";
import useEventData from "../../hooks/useEventsData";

// eslint-disable-next-line react/prop-types
const Events = ({ searchValue }) => {
 const { events } = useEventData();
  const handleEventItemClick = (id) => {
    console.log("evento clickeado"), id;
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    // eslint-disable-next-line react/prop-types
    const search = searchValue ? searchValue.toLowerCase() : '';

    // eslint-disable-next-line react/prop-types
    if (search.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) => 
        item.name.toLowerCase().includes(search)
      );
    }
    return eventsFiltered.map((eventsItems) => (
      <EventsItems
        key={`event-item-${eventsItems.id}`}
        name={eventsItems.name}
        type={eventsItems.type}
        info={eventsItems.info}
        image={eventsItems.images[0].url}
        oneEventClick={handleEventItemClick}
        id={eventsItems.id}
      />
    ));
  };
  return (
    <div>
      <h2>! Eventos Mexico ! </h2>
      {renderEvents()}
    </div>
  );
};

export default Events;

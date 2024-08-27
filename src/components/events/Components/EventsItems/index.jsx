import PropTypes from "prop-types";
import styles from "./EventsItems.module.css";
import { Link } from "react-router-dom";

const EventsItems = ({ name, id, info, image }) => {
  return (
    <div className={styles.eventItemsContainer}>
      <img src={image} alt={name} width={600} height={400} />
      <div className={styles.infoEventsItemsContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.infoItem}>{info}</p>
        <Link to={`detail/${id}`}>Ver más</Link>
      </div>
    </div>
  );
};
EventsItems.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  oneEventClick: PropTypes.func.isRequired,
};
export default EventsItems;

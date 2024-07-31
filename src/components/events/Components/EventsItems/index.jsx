import PropTypes from 'prop-types';

const EventsItems = ( {name,id, type, info, image, oneEventClick}) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    oneEventClick(id);
  }
  return (
    <div >
      <br/>
      <h4>{name}</h4>
      <img src={image} alt={name} width={600} height={400}/>
      <p>Tipo del evento: {type}</p>
      <p><b>Descripcion: </b>{info}</p>
      <button onClick= {handleSeeMoreClick}> Ver mas</button>
      <br/>
      <hr/>
      <br/>

      
      
      
      
    </div>
  )
}
EventsItems.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, 
  info: PropTypes.string.isRequired,  
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  oneEventClick: PropTypes.func.isRequired
};
export default EventsItems;

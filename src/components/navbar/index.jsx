import { useState, useEffect} from "react";



const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {}, [search, onSearch])
  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };
  const handleInputOnKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };
  console.log(search);
  return (
    <> 
    <div>
      <h4>Boletera de eventos</h4>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputOnKeyDown}
      />
      </div>
      <div>
      
    </div>
    </>
  );
};

export default Navbar;

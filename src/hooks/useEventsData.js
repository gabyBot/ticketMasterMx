import { useState, useEffect } from "react";
import eventsJson from "../Data/events.json";

const useEventData = () => {
    const [data, setData] = useState({ _embedded: { events: [] } }); // Inicializa el estado con la estructura esperada

    useEffect(() => {
        // Simula una llamada a la API
        setTimeout(() => {
           setData(eventsJson);
        }, 2000);
    }, []);

    return {
        
        events: data._embedded?.events || [], // Devuelve los eventos o un arreglo vacío si no existen
        
    };
};

export default useEventData;

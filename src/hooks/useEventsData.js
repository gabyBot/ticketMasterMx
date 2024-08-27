import { useState } from "react";

const useEventData = () => {
    const [data, setData] = useState({ _embedded: { events: [] } }); // Inicializa el estado con la estructura esperada
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=AiymK7MtA6Uo8XmzsHcf4A63ZwsViGlG&countryCode=MX');
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        }
    };

    return {
        events: data._embedded?.events || [], 
        error,
        fetchEvents,
    };
};

export default useEventData;

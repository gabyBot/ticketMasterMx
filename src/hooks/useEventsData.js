import { useState } from "react";
import { eventsJSON } from "../Data/events.json"


const useEventData = () =>{
    const [data] = useState(eventsJSON);
    const events = data?._embedded?.events || [];
    return{
        events
    }
};

export default useEventData;
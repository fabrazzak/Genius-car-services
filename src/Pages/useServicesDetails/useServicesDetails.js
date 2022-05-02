import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useServicesDetails = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `https://blooming-stream-64870.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService]

}
export default useServicesDetails;
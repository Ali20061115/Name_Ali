import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "./FlightContext"

function FlightList() {
    const { flights, setFlights } = useContext(FlightContext);
    const [search, setSearch] = useState('')
    const navigate = useNavigate();



    useEffect(() => {


        fetch('https://683ffb195b39a8039a5658ce.mockapi.io/flights')
            .then(res => res.json())
            .then(data => setFlights(data))
            .catch(err => console.error('failed to fetch flights:', err));
    })

}
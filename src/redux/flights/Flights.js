import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "./flightSlice";
import Card from "../../components/Card";
import { autocompleteClasses } from "@mui/material";
function Flights() {
  const dispatch = useDispatch();
  const { flights, status } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  console.log(flights);
  if (status === "success") {
    return (
      <div className="flights">
        {flights.map((flight) => (
          <Card flight={flight} status={status} />
        ))}
      </div>
    );
  } else if (status === "loading") {
    return <h1>Loading</h1>;
  }
  return <h1>Something went wrong</h1>;
}

export default Flights;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "./flightSlice";
import Card from "../../components/Card";
function Flights() {
  const dispatch = useDispatch();
  const { status, updatedFlights } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  console.log(updatedFlights);

  if (status === "success") {
    return (
      <div className="flights">
        {updatedFlights.map((flight) => (
          <Card flight={flight} status={status} key={flight.mission_name} />
        ))}
      </div>
    );
  } else if (status === "loading") {
    return <h1>Loading</h1>;
  }
  return <h1>Unable To Fetch Data</h1>;
}

export default Flights;

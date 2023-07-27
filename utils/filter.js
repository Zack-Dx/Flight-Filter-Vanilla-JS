import { renderFlights } from "./display.js";

export const filterFlight = (filterObj, data) => {
  const { status, departure, destination, airline, flightNum } = filterObj;

  const filteredFlights = data.filter((flight) => {
    const flightStatus = flight.status.toLowerCase().trim();
    const flightAirline = flight.airline.toLowerCase().trim();
    const flightDeparture = flight.departure.toLowerCase().trim();
    const flightDestination = flight.destination.toLowerCase().trim();
    const flightNumber = flight.flightNumber.toLowerCase().trim();

    // Conditionals
    const statusFilterMatch =
      status === "all" || flightStatus === status.toLowerCase().trim();
    const airlineFilterMatch =
      airline === "all" || flightAirline === airline.toLowerCase().trim();
    const departureFilterMatch =
      departure === "" ||
      flightDeparture.includes(departure.toLowerCase().trim());
    const destinationFilterMatch =
      destination === "" ||
      flightDestination.includes(destination.toLowerCase().trim());
    const flightNumberFilterMatch =
      flightNum === "" || flightNumber.includes(flightNum.toLowerCase().trim());

    // Returning the array for which all the conditions above are true.
    return (
      statusFilterMatch &&
      airlineFilterMatch &&
      departureFilterMatch &&
      destinationFilterMatch &&
      flightNumberFilterMatch
    );
  });

  renderFlights(filteredFlights);
};

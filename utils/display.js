const flightRow = document.querySelector(".flight_row");

export const renderFlights = (flights) => {
  const fragment = document.createDocumentFragment();
  // False Search Message
  const message = document.querySelector("#error_message");
  if (flights.length === 0) {
    message.textContent = "No flights match your search.";
    flightRow.innerHTML = "";
    return;
  }

  message.textContent = "";

  flights.forEach((flight) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="flight-number">${flight.flightNumber}</td>
      <td class="airline">${flight.airline}</td>
      <td class="departure">${flight.departure}</td>
      <td class="destination">${flight.destination}</td>
      <td class="departure-time">${flight.departureTime}</td>
      <td class="arrival-time">${flight.arrivalTime}</td>
      <td class="duration">${flight.duration}</td>
      <td class="status ${
        flight.status === "On time" ? "on-time" : "delayed"
      }">${flight.status}</td>`;
    fragment.appendChild(row);
  });

  flightRow.innerHTML = "";
  flightRow.appendChild(fragment);
};

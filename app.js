import { data } from "./constants/data.js"; // Flight Data
import { renderFlights } from "./utils/display.js";
import { filterFlight } from "./utils/filter.js";
renderFlights(data); // Initial Display

// Filters
const status_filter = document.querySelector("#status-filter");
const airline_filter = document.querySelector("#airline-filter");
const departure_filter = document.querySelector("#departure-filter");
const destination_filter = document.querySelector("#destination-filter");

// Event Listeners
status_filter.addEventListener("change", () => {
  filterFlight(
    {
      status: status_filter.value,
      airline: airline_filter.value,
      departure: departure_filter.value,
      destination: destination_filter.value,
    },
    data
  );
});
airline_filter.addEventListener("change", () => {
  filterFlight(
    {
      status: status_filter.value,
      airline: airline_filter.value,
      departure: departure_filter.value,
      destination: destination_filter.value,
    },
    data
  );
});
departure_filter.addEventListener("input", () => {
  filterFlight(
    {
      status: status_filter.value,
      airline: airline_filter.value,
      departure: departure_filter.value,
      destination: destination_filter.value,
    },
    data
  );
});
destination_filter.addEventListener("input", () => {
  filterFlight(
    {
      status: status_filter.value,
      airline: airline_filter.value,
      departure: departure_filter.value,
      destination: destination_filter.value,
    },
    data
  );
});

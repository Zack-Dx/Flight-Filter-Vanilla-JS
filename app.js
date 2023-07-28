import { data } from "./constants/data.js"; // Flight Data
import { renderFlights } from "./utils/display.js";
import { filterFlight } from "./utils/filter.js";
import { debounce } from "./utils/debounce.js";

renderFlights(data); // Initial Display

// Filters
const status_filter = document.querySelector("#status-filter");
const airline_filter = document.querySelector("#airline-filter");
const departure_filter = document.querySelector("#departure-filter");
const destination_filter = document.querySelector("#destination-filter");
const flightNumber_filter = document.querySelector("#flightNum-filter");

// Debounce Function
const opt = debounce(() => {
  filterFlight(
    {
      status: status_filter.value,
      airline: airline_filter.value,
      departure: departure_filter.value,
      destination: destination_filter.value,
      flightNum: flightNumber_filter.value,
    },
    data
  );
}, 500);

// Event Listeners
status_filter.addEventListener("change", () => {
  filterFlight(
    {
      status: status_filter.value,
      airline: airline_filter.value,
      departure: departure_filter.value,
      destination: destination_filter.value,
      flightNum: flightNumber_filter.value,
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
      flightNum: flightNumber_filter.value,
    },
    data
  );
});
departure_filter.addEventListener("input", opt);
destination_filter.addEventListener("input", opt);
flightNumber_filter.addEventListener("input", opt);

// Utils

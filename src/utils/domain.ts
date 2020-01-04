export default window.location.href.includes("localhost")
  ? "https://stg-envision-iot.herokuapp.com/api"
  : "https://envision-iot.herokuapp.com/api";

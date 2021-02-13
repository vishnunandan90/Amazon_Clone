import axios from "axios";

//whats this??
//this is http client
// const instance = axios.create({
//   baseURL: "http://localhost:5001/clone-ed028/us-central1/api/", //THE API (CLOUD FUNCTION) URL
// });

const instance = axios.create({
  baseURL: "https://us-central1-clone-ed028.cloudfunctions.net/api",
});
export default instance;

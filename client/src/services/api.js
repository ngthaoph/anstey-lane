import axios from "axios";
import { toast } from "react-toastify";

// 1. Create a custom axios instance
const api = axios.create({
  baseURL: "http://localhost:5005",
});

// 2. AXIOS RESPONSE INTERCEPTOR
api.interceptors.response.use(null, (error) => {
  // Variable which contains error ranges (true/false)
  // TRUE = 400 error
  // FALSE = 500 error
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status &&
    error.response.status < 500;
  console.log(expectedError);

  // Popup a toast depending on whether 400 (yellow) or 500 (red)
  if (!expectedError) {
    // 500 ERROR:
    console.log(`Interceptors - ${error}`);
    toast.error("Unexpected error");
  } else {
    // 400 ERROR:
    console.log(`${error?.response.data}`);
    toast.error(`${error?.response.data}`);
  }

  return Promise.reject(error);
});

// 3. AXIOS REQUEST HEADER
export function setHeaderToken() {
  const token = localStorage.getItem("token");
  if (token) {
    // Set token to a header
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Remove the token header
    delete api.defaults.headers.common["Authorization"];
  }
}

// 4. EXPORT OUR CUSTOM AXIOS
export default api;

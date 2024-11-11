import api from "./api";

//REGISTER POST REQUEST
async function register(data) {
  //data is the data from the form
  const response = await api.post("/api/auth/register", data);
  console.log(response?.data);
  return response;
}
async function login(data) {
  const response = await api.post("/api/auth/login", data);
  console.log(response?.data);
  return response;
}

//LOGIN REQUEST
const authService = {
  register,
  login,
};

export default authService;

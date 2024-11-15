import api from "./api";

//REGISTER POST REQUEST
async function getAll(data) {
  const response = await api.get("/api/products", data);

  console.log(response?.data);
  return response;
}
async function getById(id) {
  const response = await api.get("/api/products/" + id);
  console.log(response?.data);
  return response;
}
function post(data) {
  const formData = prepareFormData(data);
  return api.post("/api/products/product", formData, formConfig);
}
function put(data, id, uploadedFile) {
  const formData = prepareFormData(data, uploadedFile);

  return api.put("/api/products/" + id, formData, formConfig);
}
function del(id) {
  return api.delete("/api/products/" + id);
}

async function getUnder60() {
  const response = await api.get("/api/products/sale");
  console.log(response?.data);
  return response;
}
async function getByBase(base) {
  const response = await api.get("api/products/product/" + base);
  console.log(response?.data);
  return response;
}

const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

function prepareFormData(data, uploadedFile) {
  let formData = new FormData(); //turn into json

  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("tasting", data.tasting);
  1;
  formData.append("origin", data.origin);
  formData.append("image", data.image);
  formData.append("base", data.base);
  if (uploadedFile) {
    formData.append("uploadedFile", uploadedFile);
  }
  return formData;
}

//LOGIN REQUEST
const productService = {
  getAll,
  getById,
  post,
  put,
  del,
  getByBase,
  getUnder60,
};

export default productService;

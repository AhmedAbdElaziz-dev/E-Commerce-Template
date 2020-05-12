import axios from "axios";
const url = "http://localhost:2000/product";
const token = window.localStorage.getItem("token");
const headerAuthorization = { headers: { authorization: token } };

export async function getAll(currentPage, pageSize) {
  var { data } = await axios.get(
    `${url}/?currentPage=${currentPage}&pageSize=${pageSize}`
  );
  return data;
}

export async function getById(id) {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
}
export async function uploadImage(image) {
  
  const { data } = await axios.post(`${url}/uploadImage`,image,  {headers: {'Content-Type': 'multipart/form-data' }});
  return data;
}
export async function addProduct(product, id) {
  const imageUrl = product.imageUrl;
  if (!id) {
    const { data } = await axios.post(
      `${url}/add-product`,
      { product, imageUrl },
      headerAuthorization
    );
    return data;
  } else {
    const { data } = await axios.patch(
      `${url}/edit-product/${id}`,
      product,
      headerAuthorization
    );
    return data;
  }
}
export async function productsHandler(
  selectedCategoryId,
  sortType,
  searchValue,
  currentPage,
  pageSize,
  currentProducts
) {
  // const token = window.localStorage.getItem("token");
  const { data } = await axios.post(
    `${url}/productsHandler?currentPage=${currentPage}&pageSize=${pageSize}`,
    { selectedCategoryId, sortType, searchValue, currentProducts },
    headerAuthorization
  );
  return data;
}

export async function deleteProduct(id) {
  const { data } = await axios.delete(
    `${url}/delete?id=${id}`,
    {},
    headerAuthorization
  );
  return data;
}

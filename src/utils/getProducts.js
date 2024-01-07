import {
      fetchLogin,
      fetchProducts,
      fetchProductById
} from "../hooks/useFetch/useFetch.js";

const email = 'test_react_valentin@gmail.com';
const password = '12345678';

const login = async (email, password) => {

      const loginResponse = await fetchLogin(email, password);

      if (loginResponse.status === '200: OK') {

            return loginResponse;

      } else {

            throw new Error(loginResponse.message);

      };

}

export const getProducts = async (sId) => {

      const loginResponse = await login(email, password);

      if (loginResponse.status === '200: OK') {

            const productsResponse = await fetchProducts(sId);

            if (productsResponse.status === 'success') {

                  console.log(productsResponse)

                  const productsData = productsResponse.payload.products;


                  return productsData;

            } else {

                  throw new Error(productsResponse.message);

            };

      } else {

            throw new Error(loginResponse.message);

      };

};

export const getProductById = async (p_id) => {

      const loginResponse = await login(email, password);

      if (loginResponse.status === '200: OK') {

            const productResponse = await fetchProductById(p_id);

            if (productResponse.status === '200: OK') {

                  const productData = productResponse.payload.payload;

                  return productData;

            } else {

                  throw new Error(productResponse.message);

            };

      } else {

            throw new Error(loginResponse.message);

      };

}
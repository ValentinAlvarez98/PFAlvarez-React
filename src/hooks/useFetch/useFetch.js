export const fetchRegister = async (user) => {


      const response = await fetch('https://pfalvarez-production.up.railway.app/api/users/register', {

            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  ...user
            }),
            credentials: 'include'

      })

      const data = await response.json();


      if (response.status === 200 || response.status === 201) {

            console.log(data);

            return data;

      } else {

            throw new Error(data.error);

      }

}

export const fetchLogin = async (email, password) => {

      const response = await fetch('https://pfalvarez-production.up.railway.app/api/users/login', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  email,
                  password
            }),
            credentials: 'include'
      });

      const data = await response.json();

      console.log(response.status)

      console.log(response)

      console.log(data)

      if (response.status === '200: OK' || response.status === 200) {

            return data;

      } else {

            console.log(data.error)

            throw new Error(data.error);

      }


};

export const fetchUpdateUser = async (user) => {

      const response = await fetch('https://pfalvarez-production.up.railway.app/api/users/update', {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  ...user
            }),
            credentials: 'include'
      });

      const data = await response.json();

      console.log(response.status)

      console.log(response)

      console.log(data)

      if (response.status === '200: OK' || response.status === 200) {

            return data;

      } else {

            throw new Error(data.error);

      }

}



export const fetchProducts = async (sId) => {

      try {

            const response = sId ? await fetch(`https://pfalvarez-production.up.railway.app/api/products?limit=8&page=1&query=${sId}`, {
                  method: 'GET',
                  credentials: 'include'
            }) : await fetch('https://pfalvarez-production.up.railway.app/api/products', {
                  method: 'GET',
                  credentials: 'include'
            });

            const products = await response.json();

            if (response.ok) {
                  return products;

            } else {

                  throw new Error(products.message);

            }

      } catch (error) {

            return error;

      }

};

export const fetchProductById = async (p_id) => {

      try {

            const response = await fetch(`https://pfalvarez-production.up.railway.app/api/products/${p_id}`, {
                  method: 'GET',
                  credentials: 'include'
            });

            const product = await response.json();

            if (response.ok) {

                  return product;

            } else {

                  throw new Error(product.message);

            }


      } catch (error) {

            return error;

      }

}
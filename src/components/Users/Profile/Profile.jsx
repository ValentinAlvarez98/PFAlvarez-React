import React, { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../../../context/LoginContext/LoginContext.jsx'

const Profile = () => {

      const {
            isLoading,
            isError,
            message,
            error,
            currentUser,
            update,
            logout,
            checkSession
      } = useContext(LoginContext)

      const [user, setUser] = useState({
            first_name: "",
            last_name: "",
            email: "",
            age: 0,
            phone: ""
            /* address: {
                  city: "",
                  location: "",
                  street: "",
                  number: ""
            }, */
      })

      const handleForm = (e) => {

            e.preventDefault()

            update(user)

      }

      const handleChange = (e) => {

            let value = e.target.value

            if (e.target.name === "age") {

                  value = Number(value)

            }

            const values = { [e.target.name]: value }

            setUser({ ...user, ...values })

      }

      const handleLogout = () => {

            logout()

            alert('Hasta pronto!')

            setTimeout(() => {

                  checkSession()

            }, 1500)

      }

      return (
            <>

                  <h2>Profile</h2>

                  {isLoading && <p>Loading...</p>}

                  <form onSubmit={handleForm}>

                        <label htmlFor="first_name">First Name</label>
                        <input type="text" placeholder={currentUser ? currentUser.first_name : 'Nombre'} name='first_name'
                              onChange={handleChange}
                        />

                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" placeholder={currentUser ? currentUser.last_name : 'Apellido'} name='last_name'
                              onChange={handleChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder={currentUser ? currentUser.email : 'Email'} name='email'
                              onChange={handleChange}
                        />

                        <label htmlFor="age">Age</label>
                        <input type="number" placeholder={currentUser ? currentUser.age : 'Edad'} name='age'
                              onChange={handleChange}
                        />

                        <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder={currentUser ? currentUser.phone : 'Teléfono'} name='phone'
                              onChange={handleChange}
                        />

                        <button type="submit">Update</button>

                  </form>


                  <button onClick={handleLogout}>Logout</button>

                  {message && <p>{message}</p>}

                  {isError && <p>{error}</p>}

            </>
      )
}

export default Profile
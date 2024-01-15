import React, { createContext, useState } from 'react'
import { fetchLogin, fetchRegister, fetchUpdateUser } from '../../hooks/useFetch/useFetch.js'

export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {

      const [currentUser, setCurrentUser] = useState(null)

      const [isAuthenticated, setIsAuthenticated] = useState(false)

      const [isError, setIsError] = useState(false)

      const [isLoading, setIsLoading] = useState(false)

      const [error, setError] = useState(null)

      const [message, setMessage] = useState(null)

      const login = async (email, password) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { payload, token, message } = await fetchLogin(email, password)

                  setMessage(message)

                  setCurrentUser(payload)

                  setIsAuthenticated(true)


            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(9, toString.length - 2)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);

            };

      }

      const register = async (userData) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { payload, message } = await fetchRegister(userData)

                  setMessage(message)

            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(9, toString.length - 2)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);

            };

      }

      const update = async (userData) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { payload, message } = await fetchUpdateUser(userData)

                  setMessage(message)

                  setCurrentUser(payload)

            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(9, toString.length - 2)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);


            };

      }


      const logout = async () => {

            setCurrentUser(null)

            setIsAuthenticated(false)

      }

      return (

            <LoginContext.Provider value={{
                  currentUser,
                  isAuthenticated,
                  isError,
                  isLoading,
                  error,
                  message,
                  login,
                  register,
                  logout,
                  update
            }}>

                  {children}

            </LoginContext.Provider>

      )

}

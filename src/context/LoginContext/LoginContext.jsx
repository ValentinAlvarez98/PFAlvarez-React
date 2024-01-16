import React, { createContext, useState } from 'react'
import { fetchLogin, fetchRegister, fetchUpdateUser, fetchChechSession, fetchLogout } from '../../hooks/useFetch/useFetch.js'

export const LoginContext = createContext({

      currentUser: null,

      isAuthenticated: false,

      isError: false,

      isLoading: false,

      error: null,

      message: null,

      login: () => { },

      register: () => { },

      logout: () => { },

      update: () => { },

      checkSession: () => { }
})

export const LoginProvider = ({ children }) => {

      const [currentUser, setCurrentUser] = useState(null)

      const [isError, setIsError] = useState(false)

      const [isLoading, setIsLoading] = useState(false)

      const [error, setError] = useState(null)

      const [message, setMessage] = useState(null)

      const [isAuthenticated, setAuthenticated] = useState(false)

      const login = async (email, password) => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { payload, message } = await fetchLogin(email, password)

                  setMessage(message)

                  setCurrentUser(payload)



            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(9, toString.length - 2)

                  setIsError(true)

                  setError(errorMessage)

            } finally {

                  const { payload, message } = await fetchChechSession()

                  setMessage(message);

                  console.log(payload, message)

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

      const checkSession = async () => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { payload, message } = await fetchChechSession()

                  setAuthenticated(payload.isAuthenticaded);

                  setMessage(message)

            } catch (error) {

                  const toString = error.toString()

                  const errorMessage = toString.slice(9, toString.length - 2)

                  setIsError(true)

                  setError(errorMessage)

                  setAuthenticated(false);

            } finally {

                  setIsLoading(false)

                  setTimeout(() => {

                        setMessage(null)

                        setError(null)

                  }, 2000);

            };

      }


      const logout = async () => {

            setIsLoading(true)

            setIsError(false)

            try {

                  const { payload, message } = await fetchLogout()

                  setMessage(message)

                  setAuthenticated(false);

                  setCurrentUser(null)

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

      return (

            <LoginContext.Provider value={{
                  currentUser,
                  isAuthenticated: isAuthenticated,
                  isError,
                  isLoading,
                  error,
                  message,
                  login,
                  register,
                  logout,
                  update,
                  checkSession
            }}>

                  {children}

            </LoginContext.Provider>

      )

}

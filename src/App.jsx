import './App.sass'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import React from "react"
import { Provider } from 'react-redux'
import { store } from './store'


function App() {
  return (
    <div className='App'>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
        </Provider>
    </div>
  )
}

export default App



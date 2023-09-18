// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Footer from './components/footer/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    {/* <Footer /> */}
  </>
  //   </React.StrictMode> 
)

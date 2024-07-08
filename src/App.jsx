import { useTranslation } from 'react-i18next'
import i18n from './locales/i18next.js';
import Nav from './components/nav/Nav.jsx'
import Main from './components/main/Main.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

function App() {

  

  return (
    <>
     <Nav />
     <Main />
     <Footer />

     
    </>
  )
}

export default App


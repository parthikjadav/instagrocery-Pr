import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ProductDetailsImg from './components/ProductDetalisImg/ProductDetalisImg'
import DairyProducts from './components/DairyProducts/DairyProducts'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Header/>
      <Banner/>
      <ProductDetailsImg/>
      <DairyProducts/>
      <Footer/>
    </>
  )
}

export default App

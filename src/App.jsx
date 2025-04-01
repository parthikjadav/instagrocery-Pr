import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ProductDetailsImg from './components/ProductDetalisImg/ProductDetalisImg'
import DairyProducts from './components/DairyProducts/DairyProducts'
import Footer from './components/Footer/Footer'
import { Button } from '@heroui/button'
import { Route, Routes, useLocation } from 'react-router-dom'
import AdminPage from './components/Admin/Page'

const Layout = ({ children }) => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin")
  
  return <>
    {isAdminRoute ? <Button>hello</Button>:<Header />}
    <main>{children}</main>
  </>
}

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/admin' element={<AdminPage/>} />
          <Route path='/' element={
            <>
              <Banner/>
              <ProductDetailsImg/>
              <DairyProducts/>
              <Footer/>
            </>
          } />
        </Routes>
      </Layout>
    </>
  )
}

export default App

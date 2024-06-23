import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/About';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Services } from './pages/Services';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className = 'mx-[20px'>
        <Navbar/>

      <Routes>
        <Route index element={ <Home title="Home" />} /> 
        <Route path='/about-us' element={ <AboutUs title="About Us" /> } /> 
        <Route path='/services/' element={ <Services title="Services"/> } /> 
        <Route path='/register/' element={ <Register title="Register "/> } />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter> 
    </>
  )
}

export default App

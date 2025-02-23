import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/> 
        
       

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes> */}


        

        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;

import Header, {HeaderPhone} from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast" ;
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false) ;
  const [resizeRatio, setResizeRatio] = useState(window.innerWidth / window.innerHeight) ;
  useEffect (() =>{
    const resizeRatio = () =>{
      setResizeRatio(window.innerWidth / window.innerHeight) ;
    } ;

    window.addEventListener("resize", resizeRatio) ;

    return () => {
    window.removeEventListener("resize", resizeRatio) ;
    } ;

  }, [resizeRatio])


  return resizeRatio < 2 ? (
    <>
   <HeaderPhone  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
   <Home resizeRatio={resizeRatio} />
   <Work />
   <Timeline />
   <Services />
   <Testimonial />
   <Contact />
   <Toaster />
   <Footer />
   </>
  ) : <em id="customMessage">Please change the ratio to view !</em>
}

export default App;


import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Orders from './sections/Orders/Orders';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
       {/**<Specialties />*/} 
        <Orders />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

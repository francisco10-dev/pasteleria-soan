import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Orders from './sections/Orders/Orders';
import Contact from './sections/Contact/Contact';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
    <Helmet>
        <title>Pastelería en Santa Cruz Guanacaste | Soan</title>
        <meta
          name="description"
          content="Pastelería en Santa Cruz Guanacaste. Pasteles personalizados, queques y repostería artesanal."
        />
      </Helmet>
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

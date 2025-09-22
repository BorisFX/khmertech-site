import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  // Handle the scroll event to show the button after scrolling
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set up and clean up the event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="about">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />

      {/* Conditionally render the scroll-to-top button */}
      {showButton && (
        <div className="scrollToTopButton" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default App;
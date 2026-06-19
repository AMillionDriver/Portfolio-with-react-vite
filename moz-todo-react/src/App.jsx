import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// component import
import Header from './components/header/header.jsx';
import Hero from './components/content/html_main.jsx';
import Footer from './components/footer/footer.jsx';

// section imports
import AboutMe from './components/content/AboutMe.jsx';
import Journey from './components/content/Journey.jsx';
import Projects from './components/content/Projects.jsx';
import Contact from './components/footer/Contact.jsx';

// import styles
import './App.css';

// import AOS untuk animasi saat di scrolling
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        {/* Navbar - selalu di atas */}
        <Header />

        {/* Semua section portfolio dalam 1 halaman */}
        <main>
          <section id="dashboard"><Hero /></section>
          <section id="about"><AboutMe /></section>
          <section id="journey"><Journey /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
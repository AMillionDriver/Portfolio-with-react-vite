import React from "react";

// cdn import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// component import
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';

// import sytles
import './App.css';
function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
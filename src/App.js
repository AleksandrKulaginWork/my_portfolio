import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Contacts from './Pages/Contacts/Contacts';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Project from './Pages/Project/Project';
import { Container } from "react-bootstrap";
import './App.css'




const App = () => {
    return (
        <div className="wrapper">
            <Router>
                <Header />

                <Container className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </Container>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
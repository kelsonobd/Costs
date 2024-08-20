import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProjects from './components/pages/NewProjects'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Projects" element={<Projects/>} />
                    <Route path="/Company" element={<Company />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/NewProjects" element={<NewProjects />} />
                </Routes>
            </Container>
            <Footer />
        </Router>

    );
}

export default App;

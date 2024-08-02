import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProjects from './components/pages/NewProjects'
import Container from './components/layout/Container'


function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/Company">Empresa</Link>
                <Link to="/Contact">Contato</Link>
                <Link to="/NewProjects">Novo Projeto</Link>
            </div>

            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Company" element={<Company />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/NewProjects" element={<NewProjects />} />
                </Routes>

            </Container>
            <p>Footer</p>



        </Router>

    );
}

export default App;

import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import LogoHome from '../../images/logo_home/logo_home_color.svg'
import { ReactComponent as GitHub } from '../../images/social_network_logo/github_logo.svg'
import { ReactComponent as Instagram } from '../../images/social_network_logo/instagram_logo.svg'
import './Header.css'


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header mb-5" variant="dark">
            <Container>
                <Navbar.Brand><Nav.Link href="home">
                    <NavLink to='/'><img src={LogoHome} alt="LogoHome" /></NavLink>
                </Nav.Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-header" />

                <Navbar.Collapse id="navbar-header">
                    <Nav className="ms-auto gap-4 me-3">
                        <Nav.Link href="#home"><NavLink to='/'>Home</NavLink></Nav.Link>
                        <Nav.Link href="#about"><NavLink to='/about'>About</NavLink></Nav.Link>
                        <Nav.Link href="#skills"><NavLink to='/skills'>Skills</NavLink></Nav.Link>
                        <Nav.Link href="#projects"><NavLink to='/projects'>Projects</NavLink></Nav.Link>
                        <Nav.Link href="#contacts"><NavLink to='/contacts'>Contacts</NavLink></Nav.Link>
                    </Nav>
                    <Nav className="d-flex flex-row gap-3">
                        <Nav.Link href="#github"><NavLink to='#'><GitHub className="logo" /></NavLink></Nav.Link>
                        <Nav.Link href="#instagram"><NavLink to='#'><Instagram className="logo" /></NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;


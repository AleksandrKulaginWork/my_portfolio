import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoHome from '../../images/logo_home/logo_home_grey.svg'
import { ReactComponent as GitHub } from '../../images/social_network_logo/github_logo.svg'
import { ReactComponent as Instagram } from '../../images/social_network_logo/instagram_logo.svg'
import './Footer.css'


const Footer = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-footer mt-5" variant="dark">
            <Container>
                <Navbar.Brand><Nav.Link href="home">
                    <NavLink to='/'><img src={LogoHome} alt="LogoHome" /></NavLink>
                </Nav.Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-footer" />

                <Navbar.Collapse id="navbar-footer">
                    <div className="d-flex flex-column ms-auto">
                        <Nav>
                            <Nav className="align-items-lg-center align-items-sm-start mt-3 mb-3 mt-lg-0 mb-lg-0">
                                <Nav.Link className="footer__contacts-items">+373 699-471-99</Nav.Link>
                                <Nav.Link className="footer__contacts-items">+7 926-450-98-40</Nav.Link>
                                <Nav.Link className="footer__contacts-items">aleksandr.kulagin.work.email@gmail.com</Nav.Link>
                            </Nav>

                            <Nav className="d-flex flex-row gap-3">
                                <Nav.Link href="#github"><NavLink to='#'><GitHub className="logo" /></NavLink></Nav.Link>
                                <Nav.Link href="#instagram"><NavLink to='#'><Instagram className="logo" /></NavLink></Nav.Link>
                            </Nav>
                        </Nav>

                        <div className="footer-line mb-2 mt-2"></div>

                        <Nav className="ms-0 ms-lg-auto gap-3 gap-lg-5">
                            <Nav.Link href="#home"><NavLink to='/'>Home</NavLink></Nav.Link>
                            <Nav.Link href="#about"><NavLink to='/about'>About</NavLink></Nav.Link>
                            <Nav.Link href="#skills"><NavLink to='/skills'>Skills</NavLink></Nav.Link>
                            <Nav.Link href="#projects"><NavLink to='/projects'>Projects</NavLink></Nav.Link>
                            <Nav.Link href="#contacts"><NavLink to='/contacts'>Contacts</NavLink></Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Footer;




import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"; 
import "../Css/Header.css"

function Header() {

    return (

        <>
        <div className="NavbarSection">
            <Navbar expand="lg" className="Navbar ">
                <Container>
                    <img src="../../public/NutriPro-Logo.png" alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/NutriCalc">Nutri-Calc</Nav.Link>
                            <Nav.Link as={NavLink} to="/MealPlans">Meal Plans</Nav.Link>
                            <Nav.Link as={NavLink} to="/Workout">Workout</Nav.Link>
                            <NavDropdown title={<i className="bi bi-person-fill"></i>} id="basic-nav-dropdown" align="end">
                                <NavDropdown.Item href="#action/3.1">Signup</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>

    )

}

export default Header
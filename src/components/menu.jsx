import { Navbar, Container , Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Menu(params) {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand >
                        Usuario
                    </Navbar.Brand>
                </Container>
                <Nav>
                    <Nav.Link as={Link} to={'/Compras'}>Mis Compras</Nav.Link>
                    
                </Nav>
            </Navbar>
        </>
    )
}
export default Menu
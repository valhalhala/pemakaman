import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">MAKAM ONLINE</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">MAKAM UMUM</Nav.Link>
            <Nav.Link href="#superhero">MAKAM PAHLAWAN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar

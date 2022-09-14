import {Navbar, Container, Card, Button, Row, Col} from 'react-bootstrap';
import mainLogo from'../photos/Mantarin_haus_logo.png';


const Order = () => {
    return (
        <div>
              <Navbar className="color-nav" variant="light" >
        <Container >
          <Navbar.Brand  href="#home" style={{color: "white"}}>
            <img
              alt=""
              src={mainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Curtain-C @ Mantarin-Haus
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}

export default Order;
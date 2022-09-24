import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Order from "./components/Order";
import Records from "./components/Records";
import RecordEdit from "./components/RecordEdit";
import Records_new from "./components/Records_new";
import { Navbar, Container } from "react-bootstrap";
import mainLogo from "./photos/Mantarin_haus_logo.png";

import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Navbar className="color-nav" variant="light">
        <Container>
          <Navbar.Brand href="/records" style={{ color: "white" }}>
            <img
              alt=""
              src={mainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Curtain-C @ Mantarin-Haus
          </Navbar.Brand>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Auth />} />
          <Route path="/order" element={<Order />} />
          <Route path="/records" element={<Records />} />
          <Route path="/record/edit/:id" element={<RecordEdit />} />
          <Route path="/records/new" element={<Records_new />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

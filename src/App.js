
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Order from "./components/Order";
import Records from "./components/Records";
import RecordEdit from "./components/RecordEdit";
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Auth />} />
        <Route path="/order" element={<Order />} />
        <Route path="/records" element={<Records/>} />
        <Route path="/record_edit/:id" element={<RecordEdit/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

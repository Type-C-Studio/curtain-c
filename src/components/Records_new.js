import {
  Button,
  Input,
  Divider,
  Select,
  Space,
  Form,
  DatePicker,
  Checkbox,
} from "antd";
import { Container, Card } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
let index = 0;

const Records_new = () => {
  const [items, setItems] = useState(["2.4", "2.5"]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const [componentDisabled1, setComponentDisabled1] = useState(true);

  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <div>
      <Container>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <div style={{ textAlign: "left" }}>
            <h3>Customer</h3>
            <label>Name</label>
            <Form.Item name="customer_name">
              <Input placeholder="name" className="form-control mt-1" />
            </Form.Item>

            <label>Address</label>
            <Form.Item name="customer_address">
              <Input placeholder="address" className="form-control mt-1" />
            </Form.Item>

            <label>Tel</label>
            <Form.Item name="customer_tel">
              <Input placeholder="tel" className="form-control mt-1" />
            </Form.Item>

            <label>Email</label>
            <Form.Item name="customer_email">
              <Input placeholder="email" className="form-control mt-1" />
            </Form.Item>

            <label>Company</label>
            <Form.Item name="customer_company">
              <Input placeholder="company" className="form-control mt-1" />
            </Form.Item>

            <label>Tax</label>
            <Form.Item name="customer_tax">
              <Input placeholder="tax" className="form-control mt-1" />
            </Form.Item>

            <label>Date</label>
            <Form.Item name="date">
              <DatePicker
                placeholder="Select Date"
                className="form-control mt-1"
              />
            </Form.Item>

            <h3>Rooms</h3>
            <Form.List name="rooms">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <>
                      <label>Room Name</label>
                      <Form.Item key={key} name={[name, "room"]}>
                        <Input
                          placeholder="room"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>ม่าน</label>
                      <Form.Item name={[name, "name"]}>
                        <Input
                          placeholder="ม่าน"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>ราคา</label>
                      <Form.Item name={[name, "price"]}>
                        <Input
                          placeholder="ราคา"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>กว้าง</label>
                      <Form.Item name={[name, "width"]}>
                        <Input
                          placeholder="Width"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>สูง</label>
                      <Form.Item name={[name, "height"]}>
                        <Input
                          placeholder="Height"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>ล็อคลอน</label>
                      <Form.Item name={[name, "pattern"]}>
                        <Input
                          placeholder="ล็อคลอน"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>หน้าผ้า</label>
                      <Form.Item name={[name, "frontSpace"]}>
                        <Input
                          placeholder="หน้าผ้า"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <label>ราคาราง</label>
                      <Form.Item name={[name, "rail_price"]}>
                        <Input
                          placeholder="ราคาราง"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <Checkbox
                        checked={componentDisabled}
                        onChange={(e) => setComponentDisabled(e.target.checked)}
                      >
                        <label>ผ้าโปร่ง</label>
                      </Checkbox>

                      <Form.Item name={[name, "ocpacity_curtain_price"]}>
                        <Input
                          disabled={!componentDisabled}
                          placeholder="ราคาผ้าโปร่ง"
                          className="form-control mt-1"
                        />
                      </Form.Item>

                      <Checkbox
                        checked={componentDisabled1}
                        onChange={(e) =>
                          setComponentDisabled1(e.target.checked)
                        }
                      >
                        <label>ผ้าทึบ</label>
                      </Checkbox>

                      <Form.Item name={[name, "dark_curtain_price"]}>
                        <Input
                          disabled={!componentDisabled1}
                          placeholder="ราคาผ้าทึบ"
                          className="form-control mt-1"
                        />
                      </Form.Item>
                    </>
                  ))}
                  <Button
                    className="color-nav"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Room
                  </Button>
                </>
              )}
            </Form.List>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Overview
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
};

export default Records_new;

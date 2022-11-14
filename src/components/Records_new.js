import { Button, Input, Form, DatePicker, Checkbox, Space, Card } from "antd";

import { Container } from "react-bootstrap";

import React, { useState, useRef } from "react";

import axios from "axios";

const Records_new = () => {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [dark_price, setDark_price] = useState(0);
  const [ocpa_price, setOcpa_price] = useState(0);
  const [rail_dark_price, setRail_dark_price] = useState(0);
  const [rail_ocpa_price, setRail_ocpa_price] = useState(0);

  const [values, setValues] = useState({});

  const onFinish = () => {
    console.log("Received values of form:", values);
    axios
      .post("http://rhome19.thddns.net:5524/api/test1/create", values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.assign("/");
        }
      });
  };

  const calculate = (values) => {
    // console.log(values);
    const newDatas = {
      width: parseFloat(values.width),
      height: parseFloat(values.height),
      price: parseFloat(values.price),
      pattern: parseFloat(values.pattern),
      rail: parseFloat(values.rail_price),
      ocpa: values.ocpacity_curtain_price
        ? parseFloat(values.ocpacity_curtain_price)
        : 0,
      dark: values.dark_curtain_price
        ? parseFloat(values.dark_curtain_price)
        : 0,
    };

    // console.log(newDatas);
    axios
      .post("http://rhome19.thddns.net:5524/api/calculator", newDatas)
      .then((res) => {
        console.log(res.data);
        setAmount(res.data.amount);
        setTotal(res.data.total);
        setDark_price(res.data.dark_curtain_price);
        setOcpa_price(res.data.ocpa_curtain_price);
        setRail_dark_price(res.data.rail_dark_sum);
        setRail_ocpa_price(res.data.rail_ocpa_sum);

        const newValues = {
          qty: values.qty,
          customer_address: values.customer_address,
          customer_company: values.customer_company,
          customer_email: values.customer_email,
          customer_name: values.customer_name,
          customer_tax: values.customer_tax,
          customer_tel: values.customer_tel,
          date: values.date,
          rooms_name: values.rooms_name,
          curtain_name: values.curtain_name,
          width: parseFloat(values.width),
          height: parseFloat(values.height),
          pattern: parseFloat(values.pattern),
          curtain_front_size: parseFloat(values.frontSpace),
          rail_price: parseFloat(values.rail_price),
          ocpacity_curtain_price: values.ocpacity_curtain_price
            ? parseFloat(values.ocpacity_curtain_price)
            : 0,
          dark_curtain_price: values.dark_curtain_price
            ? parseFloat(values.dark_curtain_price)
            : 0,
          amount: res.data.amount,
          total: res.data.total,
          dark_price: res.data.dark_curtain_price,
          ocpa_price: res.data.ocpa_curtain_price,
          rail_dark_price: res.data.rail_dark_sum,
          rail_ocpa_price: res.data.rail_ocpa_sum,
        };

        setValues(newValues);
        console.log("newValues", newValues);
      });
  };

  return (
    <div>
      <Container>
        <Form
          name="dynamic_form_nest_item"
          onFinish={calculate}
          autoComplete="off"
        >
          <div style={{ textAlign: "left" }}>
            <h3>ข้อมูลของลูกค้า</h3>
            <label>Quatation No.</label>
            <Form.Item
              name="qty"
              rules={[
                {
                  required: true,
                  message: "Please input your QTY!",
                },
              ]}
            >
              <Input
                placeholder="Quatation No."
                className="form-control mt-1"
              />
            </Form.Item>

            <label>ชื่อ</label>
            <Form.Item
              name="customer_name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="name" className="form-control mt-1" />
            </Form.Item>

            <label>ที่อยู่</label>
            <Form.Item
              name="customer_address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input placeholder="address" className="form-control mt-1" />
            </Form.Item>

            <label>เบอร์โทร</label>
            <Form.Item
              name="customer_tel"
              rules={[
                {
                  required: true,
                  message: "Please input your tel!",
                },
              ]}
            >
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
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input your date!",
                },
              ]}
            >
              <DatePicker
                placeholder="Select Date"
                className="form-control mt-1"
              />
            </Form.Item>

            <label>Room Name</label>
            <Form.Item
              name="rooms_name"
              rules={[
                {
                  required: true,
                  message: "Please input your room name!",
                },
              ]}
            >
              <Input placeholder="room" className="form-control mt-1" />
            </Form.Item>

            <label>ม่าน</label>
            <Form.Item
              name="curtain_name"
              rules={[
                {
                  required: true,
                  message: "Please input",
                },
              ]}
            >
              <Input placeholder="ม่าน" className="form-control mt-1" />
            </Form.Item>

            <label>กว้าง</label>
            <Form.Item
              name="width"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input placeholder="Width" className="form-control mt-1" />
            </Form.Item>

            <label>สูง</label>
            <Form.Item
              name="height"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input placeholder="Height" className="form-control mt-1" />
            </Form.Item>

            <label>ล็อคลอน</label>
            <Form.Item
              name="pattern"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input placeholder="ล็อคลอน" className="form-control mt-1" />
            </Form.Item>

            <label>หน้าผ้า</label>
            <Form.Item
              name="frontSpace"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input placeholder="หน้าผ้า" className="form-control mt-1" />
            </Form.Item>

            <label>ราคาราง/เมตร</label>
            <Form.Item
              name="rail_price"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input placeholder="ราคาราง" className="form-control mt-1" />
            </Form.Item>

            <label>ราคาผ้าโปร่ง/เมตร</label>

            <Form.Item name="ocpacity_curtain_price">
              <Input placeholder="ราคาผ้าโปร่ง" className="form-control mt-1" />
            </Form.Item>

            <label>ราคาผ้าทึบ/เมตร</label>

            <Form.Item name="dark_curtain_price">
              <Input placeholder="ราคาผ้าทึบ" className="form-control mt-1" />
            </Form.Item>

            {amount ? (
              <>
                <Card
                  title="Details"
                  style={{
                    width: 400,
                  }}
                >
                  <h4>จำนวนผ้าทั้งหมด {amount} ชิ้น</h4>
                  <h4>ราคาผ้าทึบ: {dark_price} บาท</h4>
                  <h4> ราคาผ้าโปร่ง: {ocpa_price} บาท</h4>
                  <h4>ราคารางผ้าทึบ: {rail_dark_price} บาท</h4>
                  <h4> ราคารางผ้าโปร่ง: {rail_ocpa_price} บาท</h4>
                  <h4>Total: {total} บาท</h4>
                  <Button
                    type="primary"
                    style={{ marginTop: "5px" }}
                    onClick={onFinish}
                  >
                    Overview
                  </Button>
                </Card>
              </>
            ) : (
              ""
            )}
          </div>
          <Form.Item>
            <Space size={20} style={{ float: "right", marginBottom: 10 }}>
              <Button type="primary" htmlType="submit">
                calculator
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
};

export default Records_new;

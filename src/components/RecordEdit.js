import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Input, Form, DatePicker, Checkbox, Card } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import moment from "moment";

const RecordEdit = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [dark_price, setDark_price] = useState(0);
  const [ocpa_price, setOcpa_price] = useState(0);
  const [rail_dark_price, setRail_dark_price] = useState(0);
  const [rail_ocpa_price, setRail_ocpa_price] = useState(0);
  const [data, setData] = useState({});
  const [componentDisabled1, setComponentDisabled1] = useState(true);
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [values, setValues] = useState({});
  const [status, setStatus] = useState(0);

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
          curtain_front_size: parseFloat(values.curtain_front_size),
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
      });

    setStatus(1);
  };

  const onFinish = () => {
    if (status === 0) {
      window.alert("Please Save First!");
    } else {
      axios
        .put(`http://rhome19.thddns.net:5524/api/test1/edit/${id}`, values)
        .then((res) => {
          console.log(res);
          if (res.status === 500) {
            window.location.assign("/");
          }
        });
      window.location.assign("/");
    }
  };

  // const update = (value, values) => {
  //   const newDatas = {
  //     width: parseFloat(values.width),
  //     height: parseFloat(values.height),
  //     price: parseFloat(values.price),
  //     pattern: parseFloat(values.pattern),
  //     rail: parseFloat(values.rail_price),
  //     ocpa: values.ocpacity_curtain_price
  //       ? parseFloat(values.ocpacity_curtain_price)
  //       : 0,
  //     dark: values.dark_curtain_price
  //       ? parseFloat(values.dark_curtain_price)
  //       : 0,
  //   };

  //   // console.log(newDatas);
  //   axios
  //     .post("http://rhome19.thddns.net:5524/api/calculator", newDatas)
  //     .then((res) => {
  //       console.log(res.data);
  //       setAmount(res.data.amount);
  //       setTotal(res.data.total);
  //       setDark_price(res.data.dark_curtain_price);
  //       setOcpa_price(res.data.ocpa_curtain_price);
  //       setRail_dark_price(res.data.rail_dark_sum);
  //       setRail_ocpa_price(res.data.rail_ocpa_sum);
  //     });
  // };

  useEffect(() => {
    axios.get(`http://rhome19.thddns.net:5524/api/test1/${id}`).then((res) => {
      console.log(res.data);
      setData(res?.data);
      setAmount(res.data.amount);
      setTotal(res.data.total);
      setDark_price(res.data.dark_price);
      setOcpa_price(res.data.ocpa_price);
      setRail_dark_price(res.data.rail_dark_price);
      setRail_ocpa_price(res.data.rail_ocpa_price);
    });
  }, []);

  form.setFieldsValue({
    qty: data.qty,
    customer_address: data.customer_address,
    customer_company: data.customer_company,
    customer_email: data.customer_email,
    customer_name: data.customer_name,
    customer_tax: data.customer_tax,
    customer_tel: data.customer_tel,
    date: moment(data.date),
    rooms_name: data.rooms_name,
    curtain_name: data.curtain_name,
    width: parseFloat(data.width),
    height: parseFloat(data.height),
    pattern: parseFloat(data.pattern),
    frontSpace: parseFloat(data.curtain_front_size),
    rail_price: parseFloat(data.rail_price),
    ocpacity_curtain_price: data.ocpacity_curtain_price
      ? parseFloat(data.ocpacity_curtain_price)
      : 0,
    dark_curtain_price: data.dark_curtain_price
      ? parseFloat(data.dark_curtain_price)
      : 0,
  });

  const pdf = () => {
    window.alert("NOT FINISH YET! ");
  };

  return (
    <div>
      <Container>
        <Form
          form={form}
          name="dynamic_form_nest_item"
          // onValuesChange={update}
          onFinish={calculate}
          autoComplete="off"
        >
          <div style={{ textAlign: "left" }}>
            <Button onClick={pdf} style={{ marginTop: 15, marginBottom: 15 }}>
              Export PDF
              <FilePdfOutlined />
            </Button>
            <h3>Customer</h3>
            <label>Quatation No.</label>
            <Form.Item name="qty">
              <Input
                placeholder="Quatation No."
                rules={[
                  {
                    required: true,
                    message: "Please input your QTY!",
                  },
                ]}
                defaultValue={data.qty}
                className="form-control mt-1"
              />
            </Form.Item>
            <label>Name</label>
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

            <label>Address</label>
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

            <label>Tel</label>
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

                  {status === 1 ? (
                    <Button
                      type="primary"
                      style={{ marginTop: "5px" }}
                      onClick={onFinish}
                    >
                      Overview
                    </Button>
                  ) : (
                    ""
                  )}
                </Card>
              </>
            ) : (
              ""
            )}
          </div>
          <Form.Item>
            <Button
              type="primary"
              style={{ float: "right", marginBottom: 10 }}
              htmlType="submit"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
};

export default RecordEdit;

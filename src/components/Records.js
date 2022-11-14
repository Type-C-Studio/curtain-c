import { Divider, Table, Button, Popconfirm, message } from "antd";
import React, { useEffect, useState } from "react";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import { Container } from "react-bootstrap";

const Records = () => {
  const [data, setData] = useState();

  const onDelete = (params) => {
    axios
      .delete(`http://rhome19.thddns.net:5524/api/test1/delete/${params}`)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    axios.get("http://rhome19.thddns.net:5524/api/test1").then((res) => {
      setData(res.data);
    });
  }, []);
  const [id, setId] = useState();
  const columns = [
    {
      title: "Quatation No.",
      dataIndex: "qty",
      render: (text, rec) => <a href={`/record/edit/${rec.id}`}>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "customer_name",
      render: (text, rec) => <a href={`/record/edit/${rec.id}`}>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
      render: (date) => moment(date).format("DD/MM/YYYY"),
    },
    {
      render: (rec) => (
        <div>
          <Button
            style={{ color: "#286efb" }}
            icon={<FormOutlined />}
            type="link"
            href={`/record/edit/${rec.id}`}
          ></Button>
          <Popconfirm
            title={`Are you sure to delete ${rec.qty}`}
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              onDelete(rec.id);
              window.location.reload();
              message.success("Clicked on Yes");
            }}
          >
            <Button
              href={`/records`}
              style={{ color: "#FF4141", textAlign: "right" }}
              icon={<DeleteOutlined />}
              type="link"
            ></Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <div>
          <Divider />
          <Button
            style={{
              fontWeight: "bold",
              float: "right",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              color: "white",
              backgroundColor: "#24CE2A",
              marginBottom: 10,
            }}
            type="link"
            href="/records/new"
          >
            เปิดงานใหม่
          </Button>
          ระบบคำนวนราคาผ้าม่าน [บริษัท มัณฑรินทร์ เฮ้าส์ จำกัด]
          <Table columns={columns} dataSource={data} />
        </div>
      </Container>
    </div>
  );
};
export default Records;

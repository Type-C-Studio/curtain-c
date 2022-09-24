import { Divider, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { FormOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";

const Records = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://rhome19.thddns.net:5524/api/jobs").then((res) => {
      setData(res.data);
    });
  }, []);
  const [id, setId] = useState();
  const columns = [
    {
      title: "Name",
      dataIndex: "customer_name",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
      render: (date) => moment(date).format("DD/MM/YYYY"),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) =>
        text === "success" ? (
          <div
            style={{
              backgroundColor: "#8cfac1",
              color: "#1d8e33",
              textAlign: "center",
              borderRadius: 15,
            }}
          >
            {text}
          </div>
        ) : text === "Processing" ? (
          <div
            style={{
              backgroundColor: "#ffc471",
              color: "#a76e10",
              textAlign: "center",
              borderRadius: 15,
            }}
          >
            {text}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#dbdbdb",
              color: "#6e6e6e",
              textAlign: "center",
              borderRadius: 15,
            }}
          >
            {text}
          </div>
        ),
    },
    {
      render: (rec) => (
        <Button
          style={{ color: "#286efb" }}
          icon={<FormOutlined />}
          type="link"
          href={`/record/edit/${rec.id}`}
        ></Button>
      ),
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
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
          }}
          type="link"
          href="/records/new"
        >
          New
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default Records;

import { Navbar, Container } from "react-bootstrap";
import mainLogo from "../photos/Mantarin_haus_logo.png";
import { Divider, Radio, Table, Button } from "antd";
import React, { useState } from "react";
import { FormOutlined } from "@ant-design/icons";

const Records = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) =>
        text === "Success" ? (
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
      render: (rec, gg) => (
        <Button
          style={{ color: "#286efb" }}
          icon={<FormOutlined />}
          type="link"
          href={`/record/edit/${rec.id}`}
        ></Button>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      id: "1",
      name: "John Brown",
      date: "20/09/2022",
      status: "Canceled",
    },
    {
      key: "2",
      id: "2",
      name: "Jim Green",
      date: "20/09/2021",
      status: "Processing",
    },
    {
      key: "3",
      id: "3",
      name: "Joe Black",
      date: "18/09/2022",
      status: "Success",
    },
    {
      key: "4",
      id: "4",
      name: "Disabled User",
      date: "22/08/2022",
      status: "Success",
    },
  ]; // rowSelection object indicates the need for row selection

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

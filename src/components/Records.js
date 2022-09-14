import {Navbar, Container} from 'react-bootstrap';
import mainLogo from'../photos/Mantarin_haus_logo.png';
import { Divider, Radio, Table, Button} from 'antd';
import React, { useState } from 'react';
import { FormOutlined } from "@ant-design/icons";


const Records = () => {
    const [id, setId] = useState();
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: (text) => <a href="#">{text}</a>,
        },
        {
          title: 'Date',
          dataIndex: 'date',
          sorter: (a, b) => a.date - b.date
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text) => text === "Success" ? ( <div
            style={{
                backgroundColor: "#8cfac1",
                color: "#1d8e33",
                textAlign: "center",
                borderRadius: 15,
            }}
          >
            {text} 
          </div>) : text === "Processing" ? (
              <div
              style={{
                backgroundColor: "#ffc471",
                color: "#a76e10",
                textAlign: "center",
                borderRadius: 15,
              }}
            >
              {text}
            </div>) : (<div
              style={{
                backgroundColor: "#dbdbdb",
                color: "#6e6e6e",
                textAlign: "center",
                borderRadius: 15,
              }}
            >
              {text}
            </div>)
        },
        {
            render: (rec) => (<Button
                style={{ color: "#286efb" }}
               
                icon={<FormOutlined />}
                type="link"
               
              ></Button>)
        }
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          date: "20/09/2022",
          status: 'Canceled',
        },
        {
          key: '2',
          name: 'Jim Green',
          date: "20/09/2021",
          status: 'Processing',
        },
        {
          key: '3',
          name: 'Joe Black',
          date: "18/09/2022",
          status: 'Success',
        },
        {
          key: '4',
          name: 'Disabled User',
          date: "22/08/2022",
          status: 'Success',
        },
      ]; // rowSelection object indicates the need for row selection
      
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
       
      };
    

return(
    <div style={{textAlign: "center"}}>
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

      <div>
     

      <Divider />

      <Table
        rowSelection={{
        
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      
      />
    </div>


      
    </div>
)
}
export default Records;
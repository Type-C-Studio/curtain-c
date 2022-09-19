import {Button,Input,Card,Divider,Select, Space,} from 'antd';
import { Container } from 'react-bootstrap';
import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
let index = 0;


const Records_new = () => {
    const [items, setItems] = useState(['2.4', '2.5']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
  
    const onNameChange = (event) => {
      setName(event.target.value);
    };
  
    const addItem = (e) => {
      e.preventDefault();
      setItems([...items, name || `New item ${index++}`]);
      setName('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    };
  

    return(
        <div style={{textAlign: "center"}}>
            <Container>
                <Card title="Exsiting Data" style={{ width: 300 }}>
            Old Record
            <Button>ลูกค้าเก่า</Button><br/>
            </Card >
            <Card title="New Data" style={{ width: 300 }}>
            New Record
            <Button>ลูกค้าใหม่</Button><br/>
            </Card >
            
            
            <Card title="Room" style={{ width: 300 }}>
                <Input placeholder="Input Area Width" /> 
                <Input placeholder="Input Area Height" />
            </Card>
            <Card title="Select Hide of Textile" style={{ width: 300 }}>
            <Select
      style={{
        width: 300,
      }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>

            </Card>
            </Container>
        </div>
    )
}

export default Records_new ;
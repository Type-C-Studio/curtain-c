import { Button, Input, Divider, Select, Space, Form } from "antd";
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
  return (
    <div>
      <Container>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.List name="rooms">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>
                          <Form.Item {...restField} name={[name, "room"]}>
                            <Input
                              placeholder="Room"
                              style={{
                                width: "60%",
                              }}
                            />
                          </Form.Item>
                        </Card.Title>

                        <Form.List name="details">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>
                          <Form.Item {...restField} name={[name, "detail"]}>
                            <Input
                              placeholder="Room"
                              style={{
                                width: "60%",
                              }}
                            />
                          </Form.Item>
                        </Card.Title>
                        <Card.Footer>
                          <Button
                            onClick={() => remove(name)}
                            style={{ float: "right" }}
                          >
                            Remove room
                          </Button>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Space>
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








                        <Card.Footer>
                          <Button
                            onClick={() => remove(name)}
                            style={{ float: "right" }}
                          >
                            Remove room
                          </Button>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Space>
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

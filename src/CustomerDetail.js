import { clear } from "@testing-library/user-event/dist/clear";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  notification,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { ButtonContainer } from "./FoodTime/All";
const { Option } = Select;
const CustomerDetail = ({
  openDrawer,
  setOpenDrawer,
  selectFoodName,
  increMent,
  setShowNotification,
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: "",
  });

  const error =
    customerDetails.name === "" ||
    customerDetails.phoneNumber === "" ||
    customerDetails.city === "" ||
    customerDetails.state === "" ||
    customerDetails.address === "" ||
    (customerDetails.name === "" &&
      customerDetails.phoneNumber === "" &&
      customerDetails.city === "" &&
      customerDetails.state === "" &&
      customerDetails.address === "");

  const disabled =
    customerDetails.name === "" ||
    customerDetails.phoneNumber === "" ||
    customerDetails.city === "" ||
    customerDetails.state === "" ||
    customerDetails.address === "";

  const onError = () => {
    if (!customerDetails.phoneNumber.match("[0-9]{10}")) {
      setErrorMessage("Please provide valid phone number!!!");
    } else {
      setOpenDrawer(false);
      openNotification();
    }
  };
  const openNotification = () => {
    setShowNotification(true);
    if (errorMessage === null) {
      notification.open({
        message: "Order confirm successfully",
        description: (
          <>
            <div>{`Your total amount is ${
              selectFoodName.price * increMent
            }`}</div>
            <div>You will receive your order as soon as possible.</div>
            <div>Thank you!</div>
          </>
        ),
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }
  };
  return (
    <Drawer
      title="Customer Details"
      width={500}
      onClose={() => setOpenDrawer(false)}
      open={openDrawer}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button
            onClick={() => {
              setCustomerDetails({
                name: "",
                address: "",
                city: "",
                state: "",
                phoneNumber: "",
              });
              setErrorMessage(null);
              setOpenDrawer(false);
            }}
          >
            Cancel
          </Button>
          <ButtonContainer>
            <Button
              type="primary"
              disabled={disabled}
              onClick={() => {
                setCustomerDetails({ ...customerDetails });
                onError();
              }}
            >
              Submit
            </Button>
          </ButtonContainer>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Please enter your name"
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    name: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "please enter address",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="please enter address"
                value={customerDetails.address}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    address: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "phone number is required",
                },
              ]}
            >
              <Input
                value={customerDetails.phoneNumber}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    phoneNumber: e.target.value,
                  })
                }
              />
              <Col span={24} className="errorMessage">
                {errorMessage}
              </Col>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "Please select an owner" }]}
            >
              <Select
                placeholder="Please select city"
                value={customerDetails.city}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    city: e,
                  })
                }
              >
                <Option value="surat">Surat</Option>
                <Option value="bhavanagar">Bhavanagar</Option>
                <Option value="ahemdabad">Ahemdabad</Option>
                <Option value="rajkot">Rajkot</Option>
                <Option value="jaypur">Jaypur</Option>
                <Option value="mumbai">Mumbai</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: "Please select an owner" }]}
            >
              <Select
                placeholder="Please select city"
                value={customerDetails.state}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    state: e,
                  })
                }
              >
                <Option value="gujarat">Gujarat</Option>
                <Option value="maharashtra">Maharashtra</Option>
                {/* <Option value="ahemdabad">Ahemdabad</Option>
                <Option value="rajkot">Rajkot</Option>
                <Option value="jaypur">Jaypur</Option>
                <Option value="mumbai">Mumbai</Option> */}
              </Select>
              {customerDetails.state === "" && (
                <Col span={12} className="errorMessage">
                  {errorMessage}
                </Col>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default CustomerDetail;

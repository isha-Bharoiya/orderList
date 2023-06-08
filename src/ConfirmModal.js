import { Button, Col, Modal, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import CustomerDetail from "./CustomerDetail";
import { ButtonContainer } from "./FoodTime/All";

const ConfirmModal = ({
  openModal,
  selectFoodName,
  increMent,
  setIncreMent,
  setOpenModal,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showNotifiaction, setShowNotification] = useState(false);

  useEffect(() => {
    setIncreMent(0);
  }, [showNotifiaction]);

  const handleOk = () => {
    setOpenModal(false);
    setOpenDrawer(true);
    setIncreMent(increMent);
  };
  return (
    <>
      <Modal
        title={
          <span className="font-size-20 font-weight-600">{`Do you Want to order these ${selectFoodName?.foodName}?`}</span>
        }
        open={openModal}
        onCancel={() => {
          setIncreMent(0);
          setOpenModal(false);
        }}
        footer={[
          <Space>
            <Button
              onClick={() => {
                setIncreMent(0);
                setOpenModal(false);
              }}
            >
              Cancel
            </Button>
            <ButtonContainer className="orderBtn">
              <Button
                type="primary"
                onClick={() => {
                  handleOk();
                }}
              >
                Confirm
              </Button>
            </ButtonContainer>
          </Space>,
        ]}
      >
        <Row className="display-flex align-items-center">
          <Col span={8} className="font-size-13">
            Quantity of this items:
          </Col>
          <Col span={14}>
            <Space size={10}>
              <Button onClick={() => setIncreMent(increMent + 1)}>+</Button>
              {increMent}
              <Button
                onClick={() => increMent > 0 && setIncreMent(increMent - 1)}
              >
                -
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
      {openDrawer && increMent > 0 && (
        <CustomerDetail
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          selectFoodName={selectFoodName}
          increMent={increMent}
          setShowNotification={setShowNotification}
        />
      )}
    </>
  );
};

export default ConfirmModal;

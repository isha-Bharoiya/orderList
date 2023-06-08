import { Button, Row } from "antd";
import React, { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import { breackFastList } from "../Util";
import { ButtonContainer } from "./All";

const BreackFast = () => {
  const [openModal, setOpenModal] = useState(false);
  const [increMent, setIncreMent] = useState(0);
  const [selectFoodName, setSelectFoodName] = useState({});

  const orderNow = (i) => {
    setOpenModal(true);
    setSelectFoodName(i);
  };

  return (
    <>
      <Row className="display-flex">
        {breackFastList?.map((i) => (
          <>
            <div className="card">
              <div>
                <div className="id">{i.id}</div>
              </div>
              <div className="font-size-20 font-weight-600">{i.foodName}</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="display-flex">
                <div className="border-bottom-1"></div>
                <div className="float-right">Read</div>
              </div>

              <div>
                <img
                  src={i.img}
                  alt="foodName"
                  width={200}
                  height={150}
                  className="mt-13"
                />
              </div>
              <div className="display-flex">
                <label>Price:</label>
                <span className="ml-3">{i.price}</span>
                <div className="ml-3">({i.quantity})</div>
              </div>
              <ButtonContainer className="orderBtn">
                <Button type="primary" onClick={() => orderNow(i)}>
                  Order Now
                </Button>
              </ButtonContainer>
            </div>
          </>
        ))}
        <ConfirmModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          selectFoodName={selectFoodName}
          increMent={increMent}
          setIncreMent={setIncreMent}
        />
      </Row>
    </>
  );
};

export default BreackFast;

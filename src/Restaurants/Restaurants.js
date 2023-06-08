import React, { useState } from "react";
import BreackFast from "../FoodTime/BreackFast";
import Lunch from "../FoodTime/Lunch";
import "../CommonCss/CommonCss.css";
import { ALL, BREACKFAST, DINNER, EVENING, LUNCH } from "../Constant";
import Evening from "../FoodTime/Evening";
import Dinner from "../FoodTime/Dinner";
import All from "../FoodTime/All";

const Restaurants = () => {
  const [foodTime, setFoodTime] = useState(null);
  console.log("foodTime:", foodTime);

  return (
    <div>
      <div className="header">
        <div
          className={foodTime === BREACKFAST ? "activeMenu" : "p-5"}
          onClick={() => setFoodTime(BREACKFAST)}
        >
          BreackFast
        </div>
        <div
          className={foodTime === LUNCH ? "activeMenu" : "p-5"}
          onClick={() => setFoodTime(LUNCH)}
        >
          Lunch
        </div>
        <div
          className={foodTime === EVENING ? "activeMenu" : "p-5"}
          onClick={() => setFoodTime(EVENING)}
        >
          Evening
        </div>
        <div
          className={foodTime === DINNER ? "activeMenu" : "p-5"}
          onClick={() => setFoodTime(DINNER)}
        >
          Dinner
        </div>
        <div
          className={foodTime === ALL ? "activeMenu":"p-5"}
          onClick={() => setFoodTime(ALL)}
        >
          All
        </div>
      </div>
      {foodTime === BREACKFAST && <BreackFast />}
      {foodTime === LUNCH && <Lunch />}
      {foodTime === EVENING && <Evening />}
      {foodTime === DINNER && <Dinner />}
      {foodTime === ALL && <All />}
    </div>
  );
};

export default Restaurants;

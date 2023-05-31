import React from "react";
// import ConditionsData from "../datas/conditionsData";
import ArrowBack from "../assets/icons/arrow_back.png";
import { useState } from "react";

const Dropdown = ({ data, showDescription, showEquipments, showValue }) => {
  const [selected, setSelected] = useState([]);

  const toggle = i => {
    setSelected(prevState => {
      const updatedItems = [...prevState];
      if (updatedItems[i] === undefined) {
        updatedItems[i] = true;
      } else {
        updatedItems[i] = !updatedItems[i];
      }
      return updatedItems;
    });
  };
  return (
    <div className='collapse-bloc'>
      {data.map((item, i) => (
        <div className='collapse-toggle' key={i}>
          <div className='title-conditions'>
            {showValue && item.value ? (
              <p>{item.value}</p>
            ) : showDescription && item.description ? (
              <>{<p>{"Description"}</p>}</>
            ) : showEquipments && item.equipments ? (
              <>{<p>{"Equipements"}</p>}</>
            ) : null}
            <div onClick={() => toggle(i)}>
              <img
                src={ArrowBack}
                alt=''
                className={selected[i] ? "toggle-open" : "toggle-close"}
              />
            </div>
          </div>
          <div
            className={
              selected[i]
                ? "collapse-description-active"
                : "collapse-description"
            }
          >
            {item.value && showValue ? (
              <p>{item.description}</p>
            ) : showDescription && item.description ? (
              <>{<p>{item.description}</p>}</>
            ) : showEquipments && item.equipments ? (
              <>{<p>{item.equipments}</p>}</>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;

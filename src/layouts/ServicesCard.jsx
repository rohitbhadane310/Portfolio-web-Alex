import React from "react";

const ServicesCard = (props) => {
  return (
    <div className=" flex flex-col items-center bg-white lg:w-1/4 py-4 gap-4 rounded-md">
      <div>
        <span>{props.icon}</span>
      </div>
      <h2 className=" text-xl font-semibold">{props.title}</h2>
      <p>blog, e-commerce</p>
    </div>
  );
};

export default ServicesCard;

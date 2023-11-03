import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = (props) => {
  return (
    <div className="w-1/4">
      <div className=" flex flex-row justify-center items-center gap-4 bg-brightColor px-4 py-2 rounded-md cursor-pointer ">
        <button>{props.title}</button>
        <span>
          <BsArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Button;

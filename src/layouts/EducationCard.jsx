import React from "react";

const EducationCard = () => {
  return (
    <div className=" flex flex-row py-2">
      <div className=" w-2/4">
        <h2 className=" font-semibold">Coding Course</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>Jan 1016 - Dec 2021</p>
        </div>
      </div>
      <div>
        <h2 className=" font-semibold">Certificate of web training</h2>
        <p className=" mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor incidunt quo, nulla dolore molestiae esse animi hic, placeat
          velit omnis quasi officia suscipit. Natus dignissimos reiciendis ut
          assumenda corrupti?
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;

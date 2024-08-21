import React from "react";
import RegFormComp from "../Components/Registration/Index";

const Registration = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-2/4 items-center justify-between rounded-md bg-white p-4 shadow-md">
        <div className="w-[48%]">Animation / Image</div>
        <div className="w-[48%]">
          <RegFormComp />
        </div>
      </div>
    </div>
  );
};

export default Registration;

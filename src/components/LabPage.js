import React from "react";
import img from "../resources/hero.svg";
import EquipmentCard from "./EquipmentCard";

const LabPage = () => {
  return (
    <div className="font-[Poppins] flex flex-col items-center justify-center h-screen mt-40">
      <div className="">
        <h1 className="text-4xl font-bold">Laboratory A3-101</h1>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <img
          className="w-1/4 rounded-full mr-4"
          src={img}
          alt="Lab-Assistant Image"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Lab Assistant Name</h2>
          <p className="text-center">
            short description about the lab assistant.
          </p>
        </div>
      </div>
      <div className="mt-20 text-center ">
        <h1 className="text-3xl font-bold">
          Equipments Available in the Laboratory
        </h1>
        <div className="flex justify-center">
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
        </div>
      </div>
    </div>
  );
};

export default LabPage;

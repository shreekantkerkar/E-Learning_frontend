import img from "../resources/hero.svg";

const LabCards = ({lab}) => {
  return (
    <div className="m-4 p-4 w-[300px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200 font-[Poppins]">
      <img className="rounded-lg h-[50%] w-[100%]" src={img} alt="res-logo" />

      <h3 className="font-bold  py-4 text-xl text-center">{lab.name}</h3>
      <h4 className="font-bold  text-gray-400">
        {lab.description}
      </h4>
    </div>
  );
};

export default LabCards;

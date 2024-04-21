import img from "../resources/hero.svg";

const EquipmentCard= () => {
    return (
      <div className="mx-auto w-fit p-12">
        <div className="w-72 h-fit group">
          <div className="relative overflow-hidden">
            <img className="h-96 w-full object-cover" src={img} alt="" />
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="bg-black text-white py-2 px-5">Quantity Available : XYZ </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default EquipmentCard;

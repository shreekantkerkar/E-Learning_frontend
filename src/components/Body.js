import LabCards from "./LabCards";
import { Link } from "react-router-dom";

const Body = () => {
    const data = [
        {
            name:"A3-101 (BASIC ELECTRONICS LABORATORY)",
            description:"This lab teaches subject like BXE(Basic ELectronics Engineering"
        },
        {
            name:"A3-105 (DIGITAL ELECTRONICS LABORATORY)",
            description:"This lab teaches subject like BEE(Basic Electronics Engineering"
        }
    ];

    return (
        <div className="font-[Poppins]">
            <h1 className="m-4 p-4 text-4xl font-bold text-center">First Floor Laboratories (A3-101 to A3-105)</h1>
            <div className="flex justify-center">
                {data.map((lab) => (
                    <Link to={"/a3-101"}>
                    <LabCards lab = {lab}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body;
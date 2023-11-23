import { useState } from "react";
import { Area } from "./Area"
import { ArrowIcon } from "./ArrowIcon";

export const Company = ({ company }) => {

    console.log(company)
    const [isTablaVisible, setTablaVisible] = useState(false);

  const toggleTabla = () => {
    setTablaVisible(!isTablaVisible);
  };

  return (
    <div className="w-2/3 bg-white mb-12 mt-4 flex flex-col justify-center items-center py-8 rounded-2xl border-black shadow-lg">
        <div className="flex flex-row justify-between w-full items-center px-10">
          <h1 className="font-extrabold text-xl">{company.NOMBRE_EMPRESA}</h1>
          <ArrowIcon onDisplay={ toggleTabla }/>
        </div>
        <hr />
        {
            isTablaVisible && <div className={`overflow-hidden transition-opacity transition-max-h duration-500 ease-in-out w-full flex flex-col items-center mt-6`}> { company.AREAS.map( (area) => <Area key={ area.ID_AREA } companyArea={ area } idCompany={ company.ID_EMPRESA }/>) }</div>
        }
    </div>
  )
}
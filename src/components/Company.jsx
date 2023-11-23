import { useState } from "react";
import { Area, ArrowIcon } from "./";
import PropTypes from "prop-types";


export const Company = ({ company }) => {

  const [isVisibleTable, setIsVisibleTable] = useState(false);

  const toggleTable = () => {
    setIsVisibleTable(!isVisibleTable);
  };

  return (
    <div className="w-2/3 bg-white mb-12 mt-4 flex flex-col justify-center items-center py-8 rounded-2xl border-black shadow-lg">
        <div className="flex flex-row justify-between w-full items-center px-10">
          <h1 className="font-extrabold text-xl mr-2">{company.NOMBRE_EMPRESA}</h1>
          <ArrowIcon onDisplay={ toggleTable }/>
        </div>
        {
            isVisibleTable 
            &&  <div 
                  className={`overflow-hidden w-full flex flex-col items-center mt-6`}
                > 
                  { company.AREAS.map( (area) => <Area key={ area.ID_AREA } companyArea={ area } idCompany={ company.ID_EMPRESA }/>) }
                </div>
        }
    </div>
  )
}

Company.propTypes = {
  company: PropTypes.object.isRequired,
}


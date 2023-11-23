import { useState } from "react";
import { useReadDataXLSX } from "../hooks/useReadDataXLSX";
import { Workers, ArrowIcon } from "./";
import PropTypes from "prop-types";


export const Area = ({ companyArea, idCompany }) => {

  const { excelData } = useReadDataXLSX();

  const [isVisibleTable, setIsVisibleTable] = useState(false);

  const toggleTable = () => {
      setIsVisibleTable(!isVisibleTable);
  };

  return (
    <div className="mb-2 w-10/12 border-black rounded-2xl p-2 shadow-lg border-2 flex flex-col">
      <div className="flex flex-row justify-between items-center px-4">
        <h2 className="font-bold">{ companyArea.NOMBRE_AREA }</h2>
        <ArrowIcon  onDisplay={ toggleTable } iconSize={20} />
      </div>
      {
        isVisibleTable &&  
        <div className="mt-2">
          {
            excelData 
            ? <Workers workers={ excelData } idArea={ companyArea.ID_AREA } idCompany={ idCompany }/> 
            : <h1>Cargando...</h1>
          }
        </div>
      }
    </div>
  )
}

Area.propTypes = {
  companyArea: PropTypes.object.isRequired,
  idCompany: PropTypes.number.isRequired,
}
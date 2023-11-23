import { useState } from "react";
import { useReadDataXLSX } from "../hooks/useReadDataXLSX"
import { Company } from "./Company";
import { Loading } from "./Loading";
import { Workers } from "./Workers";
import { ArrowIcon } from "./ArrowIcon";



export const Area = ({ companyArea, idCompany }) => {
    const { excelData } = useReadDataXLSX();

    const [isTablaVisible, setTablaVisible] = useState(false);

    const toggleTabla = () => {
        setTablaVisible(!isTablaVisible);
    };


    console.log(companyArea)
  return (
    <div className="mb-2 w-10/12 border-black rounded-2xl p-2 shadow-lg border-2 flex flex-col border-[#8CC640]">
        <div className="flex flex-row justify-between items-center px-4">
            <h2 className="font-bold">{ companyArea.NOMBRE_AREA }</h2>
            <ArrowIcon  onDisplay={ toggleTabla } iconSize={20} />
        </div>
        
        {
           isTablaVisible &&  
            <div className="mt-2">
                <hr />
                    {
                        excelData ? <Workers workers={ excelData } idArea={ companyArea.ID_AREA } idCompany={ idCompany }/> : <Loading />
                    }
            </div>
        }
        
    </div>
  )
}
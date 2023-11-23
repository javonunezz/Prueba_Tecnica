import { Company } from "./components/Company";
import { Loading } from "./components/Loading";
import { useReadDataJSON } from "./hooks/useReadDataJSON";

export const App = () => {

  const { dataJSON } = useReadDataJSON();

  // console.log(dataJSON);
  return (
    <div className="bg-bg_1 justify-center items-center flex flex-col font-mono overflow-y-auto py-20">
      {
        (dataJSON)  ?  <div className="w-screen flex flex-col items-center mb-10">{dataJSON.EMPRESAS.map( (company) => <Company key={ company.ID_EMPRESA } company={ company }/> )}</div> :  <Loading />
      }
    </div>
  )
}



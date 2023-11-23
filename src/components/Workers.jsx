import { WorkersDisplayDefault, WorkersDisplayMobile } from "./";
import PropTypes from "prop-types";


export const Workers = ({ workers, idArea, idCompany }) => {

  const cleanDuplicates = (array, property) => {
    const uniqueArray = array.filter(
      (item, index, self) => index === self.findIndex((t) => t[property] === item[property])
    );
    return uniqueArray;
  };

  const workersCleaned = cleanDuplicates( workers, "RUT_TRABAJADOR" );

  const filteredWorkers = workersCleaned.filter( worker => (worker.ID_EMPRESA === idCompany) && (worker.ID_AREA === idArea));

  return (
    <>
      <hr />
      {
        filteredWorkers.length !== 0 
          ? (
              <div>
                {filteredWorkers.map( trabajador => (
                      <WorkersDisplayMobile key={trabajador.RUT_TRABAJADOR} worker={ trabajador }/>
                    )
                  )
                }  
                <WorkersDisplayDefault workers={filteredWorkers} />
              </div>
            )
          : <div className="w-full flex justify-center text-center">
              <h3 className="font-light">No hay trabajadores asignados aún...</h3>
            </div>
      }
    </>
  )
}

Workers.propTypes = {
  workers: PropTypes.array.isRequired,
  idArea: PropTypes.string.isRequired,
  idCompany: PropTypes.number.isRequired,
}
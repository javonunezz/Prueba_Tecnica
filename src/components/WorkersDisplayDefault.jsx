import { WorkerCategory } from "./";
import PropTypes from "prop-types";


export const WorkersDisplayDefault = ({ workers }) => {
  return (
    <div className="md:flex md:justify-around md:px-4 md:flex-row hidden md:block">
        <WorkerCategory singleWorkers={workers} nameCategory={ "NOMBRE" }  dataWorker={ "NOMBRE_TRABAJADOR" }/>
        <WorkerCategory singleWorkers={workers} nameCategory={ "RUT" }  dataWorker={ "RUT_TRABAJADOR" }/>
        <WorkerCategory singleWorkers={workers} nameCategory={ "EDAD" }  dataWorker={ "EDAD" }/>
        <WorkerCategory singleWorkers={workers} nameCategory={ "PROFESION" }  dataWorker={ "PROFESION" }/>
        <WorkerCategory singleWorkers={workers} nameCategory={ "CARGO" }  dataWorker={ "CARGO" }/>
    </div>
  )
}


WorkersDisplayDefault.propTypes = {
    workers: PropTypes.array.isRequired,
}
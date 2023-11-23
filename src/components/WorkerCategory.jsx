import PropTypes from "prop-types"


export const WorkerCategory = ({ singleWorkers, nameCategory, dataWorker }) => {
  return (
    <div className="mr-1 hidden sm:block w-40 mr-2">
        <h1 className="font-bold">{ nameCategory }</h1>
        <ul>
            { singleWorkers.map( worker => <li key={ worker.RUT_TRABAJADOR }>{ worker[dataWorker] }</li> )  }
        </ul>
    </div>
  )
}

WorkerCategory.propTypes = {
  singleWorkers: PropTypes.array.isRequired,
  nameCategory: PropTypes.string.isRequired,
  dataWorker: PropTypes.string.isRequired,
}
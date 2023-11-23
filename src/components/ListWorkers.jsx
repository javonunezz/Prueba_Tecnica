

export const ListWorkers = ({ workerData }) => {
  return (
    <>
        <ul className="flex flex-row justify-around">
            <li>{ workerData.NOMBRE_TRABAJADOR }</li>
            <li>{ workerData.RUT_TRABAJADOR }</li>
            <li>{ workerData.EDAD }</li>
            <li>{ workerData?.PROFESION }</li>
            <li>{ workerData.CARGO }</li>
        </ul>
        <hr />
    </>
  )
}
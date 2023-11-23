import PropTypes from "prop-types";


export const WorkersDisplayMobile = ({ worker }) => {
  return (
    <div className="md:hidden">
      <div className="mb-4 ml-4 mt-2">
          <h2 className="font-bold md:hidden">NOMBRE</h2>
          <h2>{ worker.NOMBRE_TRABAJADOR }</h2>
          <h2 className="font-bold md:hidden">RUT</h2>
          <h2>{ worker.RUT_TRABAJADOR }</h2>
          <h2 className="font-bold md:hidden">EDAD</h2>
          <h2>{ worker.EDAD }</h2>
          <h2 className="font-bold md:hidden">PROFESION</h2>
          <h2>{ worker?.PROFESION }</h2>
          <h2 className="font-bold md:hidden">CARGO</h2>
          <h2>{ worker.CARGO }</h2>
      </div>
      <hr className="border-2 border-black mb-2"/>
    </div>
  )
}

WorkersDisplayMobile.propTypes = {
  worker: PropTypes.object.isRequired,
}
import { ListWorkers } from "./ListWorkers";

export const Workers = ({ workers, idArea, idCompany }) => {

    // console.log("Los trabajadores son:", workers)
    // console.log("El id de la Area es:", idArea);
    // console.log("El id de la compania es:", idCompany)

    const cleanDuplicates = (array, propiedad) => {
        const uniqueArray = array.filter(
          (item, index, self) => index === self.findIndex((t) => t[propiedad] === item[propiedad])
        );
        return uniqueArray;
      };
    const trabajadoresUnicos = cleanDuplicates( workers, "RUT_TRABAJADOR" );


    const trabajadoresFiltrados = trabajadoresUnicos.filter( worker => (worker.ID_EMPRESA === idCompany) && (worker.ID_AREA === idArea));
    console.log("Estos son los trabajadores: ", trabajadoresFiltrados);



  return (
    <>
        {/* <ul className="flex flex-row justify-around font-semibold">
            <li>NOMBRE</li>
            <li>RUT</li>
            <li>EDAD</li>
            <li>PROFESION</li>
            <li>CARGO</li>
        </ul> */}

        {
            trabajadoresFiltrados.length !== 0 
                ? (
                    <div className="flex flex-row justify-around px-4 flex-wrap">
                        <div className="mr-1">
                            <h1 className="font-bold">NOMBRE</h1>
                            <ul>
                                { trabajadoresFiltrados.map( trabajador => <li key={ trabajador.RUT_TRABAJADOR }>{ trabajador.NOMBRE_TRABAJADOR }</li> )  }
                            </ul>
                        </div>
                        <div className="mr-1">
                            <h1 className="font-bold">RUT</h1>
                            <ul>
                                { trabajadoresFiltrados.map( trabajador => <li key={ trabajador.RUT_TRABAJADOR }>{ trabajador.RUT_TRABAJADOR }</li> )  }
                            </ul>
                        </div>
                        <div className="mr-1">
                            <h1 className="font-bold">EDAD</h1>
                            <ul>
                                { trabajadoresFiltrados.map( trabajador => <li key={ trabajador.RUT_TRABAJADOR }>{ trabajador.EDAD }</li> )  }
                            </ul>
                        </div>
                        <div className="mr-1">
                            <h1 className="font-bold">PROFESION</h1>
                            <ul>
                                { trabajadoresFiltrados.map( trabajador => <li key={ trabajador.RUT_TRABAJADOR }>{ trabajador.PROFESION }</li> )  }
                            </ul>
                        </div>
                        <div className="mr-1">
                            <h1 className="font-bold">CARGO</h1>
                            <ul>
                                { trabajadoresFiltrados.map( trabajador => <li key={ trabajador.RUT_TRABAJADOR }>{ trabajador.CARGO }</li> )  }
                            </ul>
                        </div>

                    </div>
                    
                    
                
                
                
                    )
                : <div className="w-full flex justify-center"><h3 className="font-light">No hay trabajadores asignados aún...</h3></div>
        }
    </>
  )
}
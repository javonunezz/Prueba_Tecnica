import { useEffect, useState } from "react";

export const useReadDataJSON = ( file = "/dicionario-de-datos.json" ) => {
    
    const [dataJSON, setDataJSON] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(file);
                const data = await response.json();
                setDataJSON(data);
            }catch(error){
                console.error('Error al cargar el archivo Excel:', error.message);
            }
        }
        fetchData();
    }, [file])
    
    return { 
        dataJSON 
    }   
}
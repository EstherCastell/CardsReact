import React from 'react';
import CreateTableRow from './CreateTableRow';

const CreateTable = ({data, setDataToEdit, deleteData}) => {
    return(
       <div>
           <h3>Tabla de datos</h3>
           <table>
           <thead>
           <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
            </thead>
            <tbody>
            {data.length > 0 ?(
                data.map((el) => (
                    <CreateTableRow 
                    key={el.id} 
                    el={el}
                    setDataToEdit={setDataToEdit} 
                    deleteData={deleteData}
                    />
                    ))
                ):(
                    <tr>
                    <td colSpan="3">Sin datos</td>
                </tr>  
                )}
            </tbody>
            </table>
       </div>
    );
};
    
export default CreateTable
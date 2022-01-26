import React from 'react';
import CreateTableRow from './CreateTableRow';

const CreateTable = ({data, setDataToEdit, deleteData}) => {
    return(
       <div>
           <h3>Tabla de datos</h3>
           <table>
           <thead>
           <tr>
            <th>Nombre de la imagen</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
            </thead>
            <tbody>
            {data.length === 0 ?(
                <tr>
                    <td colSpan="3">Sin datos</td>
                </tr>
                ):(
                    data.map((el) => (
                    <CreateTableRow 
                    key={el.id} 
                    el={el}
                    setDataToEdit={setDataToEdit} 
                    deleteData={deleteData}
                    />
                    ))
                )}
            </tbody>
            </table>
       </div>
    );
};
    
export default CreateTable
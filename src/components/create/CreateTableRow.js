import React from 'react';

const CreateTableRow = ({el, setDataToEdit, deleteData}) =>{
    let {imgName, imgUser, imgUrl, id} = el;
    return( 
    
    <tr>
     <td>{imgName}</td>
     <td>{imgUser}</td>
     <td>{imgUrl}</td>
     <td>
        <button onClick={()=>setDataToEdit(el)}>Edit</button>
        <button onClick={()=>deleteData(id)}>Delete</button>
    </td>
    </tr>
);
};


export default CreateTableRow;
import React from 'react';

const CreateTableRow = ({el, setDataToEdit, deleteData}) =>{
    let {imgName, imgUser, imgURL, id} = el;
    return( 
    
    <tr>
     <td>{imgName}</td>
     <td>{imgUser}</td>
     <td>{imgURL}</td>
     <td>
        <button onClick={()=>setDataToEdit(el)}>Edit</button>
        <button onClick={()=>deleteData(id)}>Delete</button>
    </td>
    </tr>
);
};


export default CreateTableRow;
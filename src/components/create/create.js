import React, {useState} from "react";
import CreateTable from "./CreateTable";
import CreateForm from "./CreateForm";
import Navbar from "../navbar";
import '../../styles/Create.css';

const falseDb = [{
        "id": 1,
        "imgName": "Beach",
        "imgUser": "Noelia",
        "imgURL": "beach"

    },
    {
        "id": 2,
        "imgName": "Mountain",
        "imgUser": "Raquel",
        "imgURL": "mountain"
    }
];


const Create = () => {
    const [db, setDb] = useState(falseDb);
    const [dataToEdit, setDataToEdit] = useState(null);


    const createData = (data) => {
        //console.log(data);
        data.id = Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map((el)=>(el.id === data.id ? data:el));
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar?`);

        if (isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }else{
            return;
        }
    };

    return(
        <div>
            <Navbar txtColor="txtColor2" />
            <h2>CREATE</h2>
        
        
        <div className="ct-create">
            <CreateForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit = {setDataToEdit} 
            />
             <CreateTable 
             data={db}
             setDataToEdit = {setDataToEdit} 
             deleteData={deleteData} 
             />
        </div>
        </div>
    );
};

export default Create;
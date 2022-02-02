import React, {useEffect, useState} from "react";
import CreateTable from "./CreateTable";
import CreateForm from "./CreateForm";
import Navbar from "../navbar";
import '../../styles/components/create.scss';
import { helpersHttp } from "../helpers/helpersHttp";
import Loader from "./Loader";
import Message from "./Message";



const Create = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpersHttp();
    let url = "http://localhost:5000/fcards";

    useEffect(() => {
        setLoading(true);
        api.get(url).then((res) => {
            //console.log(res);
            if(!res.err) {
                setDb(res);
                setError(null);
            }else {
                setDb(null);
                setError(res);
            }
            setLoading(false);
        });
    },[]);

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
            <article className="ct-create">
            <CreateForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit = {setDataToEdit} 
            />
            {loading&& <Loader/>}
            {error && <Message/>}
             {db && (
             <CreateTable 
             data={db}
             setDataToEdit = {setDataToEdit} 
             deleteData={deleteData} 
             />
             )}
             {/* <Loader/>
             <Message/> */}
             </article>
        </div>
        </div>
    );
};

export default Create;
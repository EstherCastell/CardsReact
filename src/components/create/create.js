import React, {useEffect, useState} from "react";
import CreateTable from "./CreateTable";
import CreateForm from "./CreateForm";
import Navbar from "../navbar";
import '../../styles/components/create.scss';
import { helpersHttp } from "../helpers/helpersHttp";
import Loader from "./Loader";
import Message from "./Message";
import '../../styles/components/Create.css'



const Create = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpersHttp();
    let url = "http://localhost:5000/fcards";

    useEffect(() => {
        setLoading(true);
        helpersHttp().get(url).then((res) => {
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
    },[url]);

    const createData = (data) => {
        //console.log(data);
        data.id = Date.now();

        let options = {body: data,
            headers: {"content-type": "application/json"},};

        api.post(url, options).then((res)=> {
            //console.log(res);
            if(!res.err) {
                setDb([...db, res]);
            }else {
                setError(res);
            }
        })
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        //console.log(endpoint);
        let options = {body: data,
            headers: {"content-type": "application/json"},};

            api.put(endpoint, options).then((res)=> {
                //console.log(res);
                if(!res.err) {
                    let newData = db.map((el)=>(el.id === data.id ? data:el));
                    setDb(newData);
                }else {
                    setError(res);
                }
            })
        
        
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
            <h2></h2>
        
        
        <div className="ct-create">
            <article className="ct-create">
            <CreateForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit = {setDataToEdit} 
            />
            {loading&& <Loader/>}
            {/* {error && <Message/>} */}
             {db && (
             <CreateTable 
             data={db}
             setDataToEdit = {setDataToEdit} 
             deleteData={deleteData} 
             />
             )}
             </article>
        </div>
        </div>
    );
};

export default Create;
import React, {useState, useEffect} from "react";

const initialForm ={
    imgName:"",
    imgUser:"",
    id:null,
};

const CreateForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(()=>{
        if (dataToEdit) {
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.imgName || !form.imgUser) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    };
    
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }
    
    return <div className="form">
        <h3>{dataToEdit ? "Editar" : "Añadir"} </h3>
        <form onSubmit={handleSubmit}>
            <input 
            className="input"
            type="text" 
            name="imgName" 
            placeholder="Title" 
            onChange={handleChange} 
            value={form.imgName} />
        </form>
        <form onSubmit={handleSubmit}>
            <input 
            className="input" 
            type="text" 
            name="imgUser" 
            placeholder="Name" 
            onChange={handleChange} 
            value={form.imgUser} />
        </form>
            <input className="button" type="submit" value="Submit" onClick={handleSubmit} />
            <input className="button" type="reset" value="Reset" onClick={handleReset} />
    </div>;
    
};

export default CreateForm;
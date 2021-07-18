import React from 'react';
import { useForm } from 'react-hook-form';

const Input=({city,setCity, })=>{
    const {register, handleSubmit} = useForm();
    const onSubmit = (data)=>{
        setCity(data.localisation);
    }
    return(

            <form className="input-group rounded m-5" onSubmit={handleSubmit(onSubmit)}>
            <input id="form1" type="text" name="localisation" placeholder="Localisation" {...register("localisation")}/>
            <button type="submit" for="form1" className="button">Search</button>
            </form>
 
        
    )
}

export default Input;
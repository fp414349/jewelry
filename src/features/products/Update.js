import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addProduct, addProductToServer, updateProduct } from './productsSlice'

const Update = () => {
    let dispatch = useDispatch();
    let navigate=useNavigate();
    let location=useLocation();
    let { register, handleSubmit, formState: { errors } } = useForm({intialState:{name:"stedikg"}}
        
    );
    // let empty = {
    //     "id": null,
    //     "name": "",
    //     "description": "",
    //     "imgUrl": "",
    //     "content": "",
    //     "price": null,
    //     "isCooling": false,
    //     "company": "",
    //     "prodDate": ""
    // }
    const submittion = (data) => {
        let copyData={
            id: location.state.id,
        name:data.name,
        description: data.description,
        imgUrl: data.imgUrl,
        price: +data.price,
        company: data.company,
        yearCollection: +data.yearCollection
        }
        dispatch(updateProduct(copyData));
        navigate("/products");
        
    }
console.log(location.state);

    return (
        <form onSubmit={handleSubmit(submittion)}>
            <TextField {...register("name")   
            }
            defaultValue={location.state.name}
                label="product name" />
            
            <br />
            <br />
            <TextField {...register("description", {
                
            })}
            defaultValue={location.state.description}
            label="description" />
         
            <br />
            <br />
            <TextField {...register("imgUrl", {
               
            })} 
            defaultValue={location.state.imgUrl}
            label="imgUrl" />
          
            <br />
            <br />
          
            <TextField {...register("price",{
              
                pattern: /[0-9]/
            })}
            defaultValue={location.state.price}
            label="price" />
          
            {errors.price?.type === "pattern" && <p className="error-message">incorrect entry</p>}
            <br />
            <br />
           
            <TextField {...register("company", {
              
            })}
            defaultValue={location.state.company}
            label="company" />
            {errors.company?.type === "required" && <p className="error-message">{errors.company.message}</p>}
            <br />
            <br />
            <TextField {...register("yearCollection",{
             
            })} 
            defaultValue={location.state.yearCollection}
            id="outlined-start-adornment" label="year collection" type="number" />
            {errors.yearCollection?.type === "required" && <p className="error-message">{errors.prodDate.message}</p>}
            <br />
            <br />
            <Button variant="contained" type="submit">עדכן</Button>
        </form>
    );
}
export default Update;



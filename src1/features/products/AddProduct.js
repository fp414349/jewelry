import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct, addProductToServer } from './productsSlice'

const AddProduct = () => {
    let dispatch = useDispatch();
    let { register, handleSubmit, formState: { errors } } = useForm();
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
    const submittion = data => {
        console.log(data);
        console.log(data.productName);
        // empty = {
        //     "id": null,
        //     "name": data.productName,
        //     "description": data.description,
        //     "imgUrl": data.imgUrl,

        //     "price": Number(data.price),

        //     "company": data.company,
        //     "yearCollection": Number(data.yearCollection)
        // }
        let empty={
            "id":null,
            ...data
        }
        console.log(empty);
        dispatch(addProductToServer(empty))

    }


    return (
        <form onSubmit={handleSubmit(submittion)}>
            <TextField {...register("productName", {
                required: "name is required"
            })}
                label="product name" />
            {errors.productName && <p className="error">{errors.productName.message}</p>}
            <br />
            <br />
            <TextField {...register("description", {
                required: "description is required"
            })} label="description" />
            {errors.description && <p className="error">{errors.description.message}</p>}
            <br />
            <br />
            <TextField {...register("imgUrl", {
                required: "imgUrl is required"
            })} label="imgUrl" />
            {errors.imgUrl && <p className="error">{errors.imgUrl.message}</p>}
            <br />
            <br />
          
            <TextField {...register("price", {
                required: "price is required",
                pattern: /[0-9]/
            })} label="price" />
            {errors.price?.type === "required" && <p className="error-message">{errors.price.message.required}</p>}
            {errors.price?.type === "pattern" && <p className="error-message">incorrect entry</p>}
            <br />
            <br />
           
            <TextField {...register("company", {
                required: "company is required"
            })} label="company" />
            {errors.company?.type === "required" && <p className="error-message">{errors.company.message}</p>}
            <br />
            <br />
            <TextField {...register("yearCollection", {
                required: "year collection is required"
            })} id="outlined-start-adornment" label="year collection" type="number" />
            {errors.yearCollection?.type === "required" && <p className="error-message">{errors.prodDate.message}</p>}
            <br />
            <br />
            <Button variant="contained" type="submit">הוסף</Button>
        </form>
    );
}
export default AddProduct;



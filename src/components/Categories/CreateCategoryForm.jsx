import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import axios from 'axios';

const CreateCategoryForm = ({onSubmitSuccess}) => {
    const [auth, setAuth] = useAuth();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = async ({ categoryName }) => {
        console.log(categoryName);
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': auth?.token,
            }
            const { data } = await axios.post("http://localhost:5050/api/v1/category/create-category",
                { name: categoryName }, { headers: headers })
            if (data?.success) {
                toast.success(data.message);
                onSubmitSuccess();
            }
            else toast.error(data.message);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in category input.");
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Add new Category"
                className="input input-bordered w-full max-w-xs"
                defaultValue={""}
                {...register("categoryName", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <input className='btn' type="submit" />
        </form>
    )
}

export default CreateCategoryForm
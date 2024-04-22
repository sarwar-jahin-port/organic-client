import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import axios from 'axios';

const EditCategoryForm = ({onEditSuccess, categoryId}) => {
    const [auth, setAuth] = useAuth();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = async ({ newcategoryName }) => {
        console.log(newcategoryName);
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': auth?.token,
            }
            const { data } = await axios.put(`http://localhost:5050/api/v1/category/update-category/${categoryId}`,
                { name: newcategoryName }, { headers: headers })
            if (data?.success) {
                console.log(data.category);
                toast.success(data.message);
                onEditSuccess();
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
                placeholder="Edit Category"
                className="input input-bordered w-full max-w-xs"
                defaultValue={""}
                {...register("newcategoryName", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <input className='btn' type="submit" />
        </form>
    )
}

export default EditCategoryForm
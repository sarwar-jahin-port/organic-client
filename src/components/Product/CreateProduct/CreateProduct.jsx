import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/auth';

const CreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [auth, setAuth] = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(formdata) => {
        // console.log(formdata);
        try {
            const { title, description, price, quantity, shipping, category, photo } = formdata;
            const productData = new FormData();
            productData.append("title", title);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            productData.append("shipping", shipping);
            productData.append("category", category);
            productData.append("photo", photo[0]);

            const headers = {
                'Authorization': auth?.token,
                'Content-Type': 'multipart/form-data',
            }
            const { data } =await axios.post("http://localhost:5050/api/v1/product/create-product", productData, { headers: headers })
            if (data?.success) {
                toast.success("Product created successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong creating product.");
        }
    };

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:5050/api/v1/category/categories");
            if (data.success) {
                setCategories(data.categories);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.");
        }
    }
    useEffect(() => {
        getAllCategory();
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label" htmlFor="title">Title</label>
                    <input className="input border border-gray-400" type="text" id="title" name="title" {...register('title', { required: true })} />
                    {errors.title && <span className="text-red-500">Title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label" htmlFor="description">Description</label>
                    <textarea className="textarea border border-gray-400" id="description" name="description" {...register('description', { required: true })}></textarea>
                    {errors.description && <span className="text-red-500">Description is required</span>}
                </div>
                <div className='form-control'>
                    <label htmlFor="price">Price</label>
                    <input className='input border border-gray-400' type="number" name="price" id="price" {...register('price', { required: true })} />
                    {errors.price && <span className="text-red-500">Price is required</span>}
                </div>
                <div className='form-control'>
                    <label htmlFor="quantity">Quantity</label>
                    <input className='input border border-gray-400' type="number" name="quantity" id="quantity" {...register('quantity', { required: true })} />
                    {errors.quantity && <span className="text-red-500">Quantity is required</span>}
                </div>
                <div className="form-control">
                    <label className="label" htmlFor="category">Category</label>
                    <select className="select border border-gray-400" id="category" name="category" {...register('category', { required: true })}>
                        <option value="">Select category...</option>
                        {categories.map((category, index) => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                    {errors.category && <span className="text-red-500">Category is required</span>}
                </div>
                <div className="form-control">
                    <label className="label" htmlFor="photo">Photo</label>
                    <input className="input" type="file" id="photo" name="photo" {...register('photo')} />
                </div>
                <div className="form-control">
                    <input className="checkbox" type="checkbox" id="shipping" name="shipping" {...register('shipping')} />
                    <label className="label" htmlFor="shipping">Shipping</label>
                </div>
                <button className="btn btn-primary lg:w-full" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import CreateCategoryForm from './CreateCategoryForm';
import EditCategoryForm from './EditCategoryForm';

const Categories = () => {
    const [auth, setAuth] = useAuth();
    console.log(auth);
    const [categories, setCategories] = useState([]);

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

    const handleDeleteCategory = async (categoryId) => {
        console.log(categoryId);
        try {
            if(confirm("Are you sure?")){
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': auth?.token,
                }
                const {data} = await axios.delete(`http://localhost:5050/api/v1/category/delete-category/${categoryId}`,{headers: headers})
                if(data?.success){
                    toast.success("Category Deleted Successfully.");
                }
                getAllCategory();
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    console.log(categories);
    return (
        <div className="overflow-x-auto ml-2">
            <CreateCategoryForm onCreateSuccess={getAllCategory}/>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        categories.map(c => (
                            <tr className="bg-base-200" key={c._id}>
                                <th>category</th>
                                <td>{c.name}</td>
                                <td className='flex justify-center items-center'>
                                    <div>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn" onClick={() => document.getElementById(`my_modal_${c._id}`).showModal()}>Edit</button>
                                    <dialog id={`my_modal_${c._id}`} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <div>
                                                <EditCategoryForm 
                                                categoryId={c._id}
                                                onEditSuccess={getAllCategory}/>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    </div>
                                    <div>
                                    <button className='btn btn-error' type="submit" onClick={()=>handleDeleteCategory(c._id)}>DELETE</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Categories
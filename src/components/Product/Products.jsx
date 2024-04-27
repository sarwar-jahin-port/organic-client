import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import UpdateProduct from './UpdateProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [auth, setAuth] = useAuth();

    const getAllProducts = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': auth?.token,
            }
            const { data } = await axios.get("http://localhost:5050/api/v1/product/all-products", { headers: headers })
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllProducts();
    }, [])

    const handleDeleteProduct = async (productId) => {
        console.log(productId);
        try {
            if (confirm("Are you sure?")) {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': auth?.token,
                }
                const { data } = await axios.delete(`http://localhost:5050/api/v1/product/product-delete/${productId}`, { headers: headers })
                if (data?.success) {
                    toast.success("Product Deleted Successfully.");
                    getAllProducts();
                } else {
                    toast.error("Sometime wrong while deleting products.");
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    console.log(products);
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.title.length > 20 ? product.title.slice(0, 20).concat("..."):product.title}</td>
                            <td>{product.description.length > 20 ? product.description.slice(0, 20).concat("...") :product.description}</td>
                            <td><span className='text-xl'>৳</span> {product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category ? product.category.name : 'N/A'}</td>
                            <td>
                                <div className='inline'>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-sm" onClick={() => document.getElementById('my_modal_5').showModal()}>Edit</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <UpdateProduct product={product}/>
                                    </dialog>
                                </div>
                                <button className='btn btn-sm btn-error' onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products
import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Categories from '../../components/Categories/Categories';

const Admin = () => {
    const [box1, setBox1] = useState(true);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);

    const handleBox = (box) =>{
        setBox1(false);
        setBox2(false);
        setBox3(false);

        box(true);
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {box1 &&
                    <>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Dashboard />
                    </>
                }
                {box2 &&
                    <>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Categories/>
                    </>
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li onClick={()=>handleBox(setBox1)}><a>Dashboard</a></li>
                    <li onClick={()=>handleBox(setBox2)}><a>Categories</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Admin
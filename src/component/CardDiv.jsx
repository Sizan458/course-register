import { useEffect } from "react";
import { useState } from "react";
import {FaDollarSign,FaBookOpen} from 'react-icons/fa';
import Cart from "./cart";


const CardDiv = () => {
    const [data, setData] =  useState([])

    useEffect(() =>{
        fetch('./course.json')
        .then(res=>res.json())
        .then(card =>setData(card))
    },[] )
    return (
        <div >
            <h1 className=" text-3xl text-center font-bold text-black mt-3">Course Registration</h1>
            
            <div className="flex mt-5  w-[90%] mx-auto gap-4">
               <div className="grid grid-cols-3   gap-2 w-[80%]  text-black">
               {
                data.map(data=>(
                    <div className="card bg-base-100 shadow-xl">
  <figure><img src={data.image } className="w-full mt-4 p-3"/></figure>
  <div className="card-body">
    <h2 className="card-title text-black">{data.title}</h2>
    <p className="text-base">{data.description}</p>
    <div className="flex gap-10 mt-2">
        <div >
           <p>  <button className="text-xl "> <FaDollarSign></FaDollarSign> </button> <span>Price:{data.price}</span> </p>
          
        </div>
        <div>
         <p> <button className="text-xl gap-1"> <FaBookOpen></FaBookOpen> </button> Credit:{data.credit}hr</p>
        </div>
    </div>
    <div className="card-actions ">
      <button className="btn btn-success w-full mt-3 text-white font-bold text-xl">Select</button>
    </div>
  </div>
</div>
                )
                    
                )
               }
               </div>
               <div >
                <Cart></Cart>
               </div>
            </div>

        </div>
    );
};

export default CardDiv;
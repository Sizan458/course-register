import { useEffect } from "react";
import { useState } from "react";


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
            
            <div className="flex mt-5 w-[90%] mx-auto">
               <div className="grid grid-cols-3  gap-3  ">
               {
                data.map(data=>(
                    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                )
                    
                )
               }
               </div>
               <div>
                <h3>Cart</h3>
               </div>
            </div>

        </div>
    );
};

export default CardDiv;
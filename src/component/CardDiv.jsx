import { useEffect } from "react";
import { useState } from "react";


const CardDiv = () => {
    const [data, setData] =  useState([])

    useEffect(() =>{
        fetch('./course.json')
        .then(res=>res.json())
        .then(data =>setData(data))
    },[] )
    return (
        <div>
            <h1 className=" text-3xl text-center font-bold text-black mt-3">Course Registration</h1>
            <div>
                <h2>Course:{data.length}</h2>
            </div>

        </div>
    );
};

export default CardDiv;
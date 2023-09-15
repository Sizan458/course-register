import { useEffect } from "react";
import { useState } from "react";
import {FaDollarSign,FaBookOpen} from 'react-icons/fa';
import Cart from "./cart";
import swal from 'sweetalert'


const CardDiv = () => {
    const [data, setData] =  useState([])
    const [selectCourse,setSelectCourse] = useState([])
    const[price,setPrice] = useState(0)
    const[credit,setCredit]=useState(0)
    const[RemainingCredit,setRemainingCredit]=useState(0)

    useEffect(() =>{
        fetch('./course.json')
        .then(res=>res.json())
        .then(card =>setData(card))
    },[] )
const handleCourse=(data) =>{
    const isExit=selectCourse. find (item=>item.id===data.id)
    let price=data.price;
    let Credit=data.credit;
    if(isExit){
        return swal("Already selected this course");
    }else{
        selectCourse.forEach(dollar=>{
           price+=dollar.price
        });
       setPrice(price);
      
       selectCourse.forEach(credit=>{
           Credit+=credit.credit
       })
       const RemainingCredit= 20-Credit
       setRemainingCredit(RemainingCredit)
       setCredit(Credit)
        setSelectCourse([...selectCourse,data])
    }
    
   
    
    
}

    return (
        <div className="mb-2">
            <h1 className=" text-3xl text-center font-bold text-black mt-3">Course Registration</h1>
            
            <div className="flex w-[90%] mx-auto gap-4">
               <div className="grid grid-cols-3 gap-3 w-[80%]">
               {
                data.map(data=>(
                    <div className="card bg-base-100 shadow-xl"  key={data.id}>
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
      <button className="btn btn-success w-full mt-3 text-white font-bold text-xl" onClick={()=>handleCourse(data)}>Select</button>
    </div>
  </div>
</div>
                )
                    
                )
               }
               </div>
               <div >
                <Cart selectCourse={selectCourse} price={price} credit={credit} RemainingCredit={RemainingCredit} ></Cart>
               </div>
            </div>

        </div>
    );
};

export default CardDiv;
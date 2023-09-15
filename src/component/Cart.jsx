import PropTypes from 'prop-types'
const Cart = ({selectCourse,price,credit,RemainingCredit}) => {
    console.log(selectCourse)
    return (
        <div className="mt-6 p-4 border-2 border-green-400">
            <h2 className="    font-bold text-sky-500  ">Credit Hour Remaining {RemainingCredit } hr</h2>
            <hr  className="mt-4"/>
            <div>
                <h2 className="text-center mt-3 text-xl font-bold"> Course Name</h2>
                <div className='mt-3'>
                  {
                    selectCourse.map(courses=>(
                        <li key={courses.id}className='list-decimal'>{courses.title }</li>
                       
                    ))
                  }
                </div>
            </div>
            <hr className="mt-5"/>
            <div>
                <h2 className="text-xl mt-2 font-bold">Total Credit Hour :{credit}</h2>
            </div>
            <hr className="mt-3"/>
            <div>
                <h2 className="mt-4 text-xl font-bold" >Total Price :{price}$</h2>
            </div>
        </div>
    );
};
Cart.propTypes={
    selectCourse: PropTypes.array,
    price: PropTypes.number,
    credit: PropTypes.number,
    RemainingCredit: PropTypes.number
}
export default Cart;
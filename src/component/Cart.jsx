
const Cart = () => {
    return (
        <div className="mt-6 p-4 border-2 border-green-400">
            <h2 className="  text-xl  font-bold text-sky-500  ">Credit Hour Remaining</h2>
            <hr  className="mt-4"/>
            <div>
                <h2 className="text-center mt-3 text-xl font-bold"> Course Name</h2>
            </div>
            <hr className="mt-5"/>
            <div>
                <h2 className="text-xl mt-2 font-bold">Total Credit Hour :</h2>
            </div>
            <hr className="mt-3"/>
            <div>
                <h2 className="mt-4 text-xl font-bold" >Total Price :</h2>
            </div>
        </div>
    );
};

export default Cart;
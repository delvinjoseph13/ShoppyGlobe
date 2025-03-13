import { useSelector } from "react-redux";

function CheckOut(){

    const cartItems=useSelector((state)=>state.cart.items)
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className="max-w-5xl mx-auto mb-4 ">
            <h2 className="text-3xl font-bold text-center mt-2 mb-10">Checkout</h2>

            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h1 className="text-xl font-medium mb-4">Billing Information</h1>
                <form className="grid grid-cols-1 gap-4">
                    <input type="text" 
                    placeholder="Full Name"
                    className="border p-3 rounded-md border-gray-300 "
                    />
                    <input type="email" 
                    placeholder="Enter Email"
                    className="border p-3 rounded-md border-gray-300 "
                    />
                    <input type="text" 
                    placeholder="Shiipping Address"
                    className="border p-3 rounded-md border-gray-300 "
                    />
                </form>

            </div>

            <div className="bg-white shadow-2xl rounded-lg p-5 ">
                <h1 className="text-xl font-medium mb-4">Order Summany</h1>
                 {
                    cartItems.map((item)=>(
                        <div key={item.id} className="flex justify-between mb-2">
                        <span>{item.title} (x{item.quantity})</span>
                        <span>${item.price * item.quantity}</span>
                        </div>
                    ))
                 }
                 <hr className="my-3" />

                 <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                 </div>
    
            </div>
            <button
                className="w-full mt-2 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
                onClick={() => alert("Order placed successfully!")}
            >
                Place Order
            </button>
        </div>
    )
}

export default CheckOut;
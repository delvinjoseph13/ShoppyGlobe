import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../utils/createCartSlice";

function CartItem() {
    const cartItems = useSelector((state) => state.cart.items);  // to get all the items in the cart
    const dispatch = useDispatch();  //redux method for getting the action in the createCartSlice
    console.log(cartItems)
    return (
        <div className="max-w-5xl mx-auto p-5">
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg flex gap-5 items-start p-4 shadow-md mb-3">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-50 h-50 object-cover rounded-lg"
                        />
                        <div className="space-y-4">
                            <h1 className="text-lg">{item.title}</h1>
                            <h1 className="text-[15px] text-gray-600">{item.brand}</h1>
                            <p className="text-xl font-bold">
                                Price: ${item.price} 
                                <span className="text-green-400 ml-4 text-[15px]">
                                    {item.discountPercentage}% Off
                                </span>
                            </p>

                            {/* Quantity Control */}
                            <div className="flex items-center gap-3 mt-4 p-3 rounded-md w-fit ">
                                <button 
                                    className="w-8 h-8 text-xl rounded-lg bg-gray-200 hover:bg-gray-300"
                                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                                >
                                    -
                                </button>

                                <span className="text-lg font-semibold">{item.quantity}</span>

                                <button 
                                    className="w-8 h-8 text-xl rounded-lg bg-gray-200 hover:bg-gray-300"
                                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                                >
                                    +
                                </button>

                                <button 
                                    className="bg-red-500 text-white ml-10 w-20 h-8 rounded-md"
                                    onClick={() => dispatch(removeItem({ id: item.id }))}

                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartItem;

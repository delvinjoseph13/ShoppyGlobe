import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../utils/createCartSlice";

function CartItem() {
    const cartItems = useSelector((state) => state.cart.items);  // to get all the items in the cart
    const dispatch = useDispatch();  //redux method for getting the action in the createCartSlice
    console.log(cartItems);

    return (
        <div className="max-w-7xl mx-auto p-5">
            {cartItems.length === 0 ? (
                <p className="text-center text-xl font-semibold mt-10">Your cart is empty.</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white w-full rounded-lg flex flex-col md:flex-row gap-5 items-start p-6 shadow-md"
                        >
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full md:w-40 h-40 object-cover rounded-lg"
                            />
                            <div className="space-y-4 w-full">
                                <h1 className="text-lg font-bold">{item.title}</h1>
                                <h1 className="text-sm text-gray-600">{item.brand}</h1>
                                <p className="text-lg font-bold">
                                    Price: ${item.price} 
                                    <span className="text-green-400 ml-2 text-sm">
                                        {item.discountPercentage}% Off
                                    </span>
                                </p>

                                {/* Quantity Control */}
                                <div className="flex items-center gap-3 mt-4  p-3 rounded-md w-full sm:w-fit">
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

                                </div>
                                <button
                                        className="bg-red-500 text-white ml-auto sm:ml-10 w-20 h-8 rounded-md"
                                        onClick={() => dispatch(removeItem({ id: item.id }))}
                                    >
                                        Remove
                                    </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartItem;

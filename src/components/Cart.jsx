import CartItem from "./CartItem"

function Cart(){
    return (
        <div className="max-w-5xl mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <CartItem/>
        </div>
    )
}

export default Cart
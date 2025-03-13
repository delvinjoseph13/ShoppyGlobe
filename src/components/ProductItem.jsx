import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additem } from "../utils/createCartSlice";

function ProductItem({ items }) {
    const dispatch=useDispatch();
    console.log(items)
    return (
        <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
           <img src={items.images?.[0] || 'default-image-url'} alt={items.title} />

            
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-900">{items.title}</h2>
                <p className="text-sm text-gray-500">Category: {items.category}</p>
                <p className="text-sm text-gray-700">Rating: ⭐ {items.rating}</p>
                <p className="text-lg font-semibold text-blue-600">${items.price}</p>
                <p className="text-sm text-gray-600 line-clamp-3">{items.description}</p>

                {/* go to the product page and give id also getting the id form the productDetails using useParams method and display the details */}
                <Link to={`/products/${items.id}`}>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    View Product Details
                </button>
                </Link>

                <Link to='/cart'>
                
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                onClick={()=> dispatch(additem({ ...items, id: items.id,thumbnail: items.images[0] }))}
                >
                    Add To cart
                </button>
                </Link>

            </div>
        </div>
    );
}

export default ProductItem;
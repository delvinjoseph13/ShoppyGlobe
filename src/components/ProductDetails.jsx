import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({ images: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //this useEffect is for getthing the particular product details with the id
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`); 
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-5">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                <Link to={'/products'}>
                <div className=" flex mb-10 ">
                <i class="material-icons" style={{marginTop:"18px",marginLeft:"10px"}}>chevron_left</i>
                <h2 className="p-4 underline">Back to Brower Books Page</h2>
                </div>
                
                </Link>
                <div className="flex gap-5 flex-col">
                
                <img 
                    src={product.thumbnail} 
                    alt={product.title} 
                    className="w-80 h-80 object-cover rounded-lg shadow-md" 
                />
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-blue-500 font-semibold">Price: ${product.price}</p>
                    <p className="text-green-500">Availability: {product.availabilityStatus}</p>
                    <p className="text-sm text-gray-500">Minimum Order Quantity: {product.minimumOrderQuantity}</p>
                    <p className="text-sm text-gray-500">Shipping: {product.shippingInformation}</p>
                    <p className="text-sm text-gray-500">Return Policy: {product.returnPolicy}</p>
                    <p className="text-sm text-gray-500">Warranty: {product.warrantyInformation}</p>
                    <div className="flex gap-2 mt-4">
                        {product.images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Image ${index + 1}`} 
                                className="w-20 h-20 object-cover rounded-md border" 
                            />
                        ))}
                    </div>
                </div>
            </div>
                </>

            )}
        </div>
    );
}

export default ProductDetail;

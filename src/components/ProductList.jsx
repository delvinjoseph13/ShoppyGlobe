import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useProducts from "../utils/useProducts";

function ProductList() {
    // const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {products,loading,error}=useProducts();
    
    //products are comming from the useProducts custom hook when we get the data set the data to the filteredProducts and whenever the products change it will re-render
    useEffect(()=>{
        setFilteredProducts(products)
    },[products])

    //search function
    function handleSearch() {
        if (search.trim() === "") {
            setFilteredProducts(products); 
        } else {
            const filtered = products.filter(product =>
                product.title.toLowerCase().replace(/\s+/g, '').includes(
                    search.toLowerCase().replace(/\s+/g, '')
                )
            );
            setFilteredProducts(filtered); 
        }
    }

    useEffect(() => {
        handleSearch();
    }, [search, products]);

    return (
        <>
            <div className="flex justify-center items-center mx-auto">
                <input
                    type="text"
                    className="border-2 h-10 w-80 mt-8 p-2 rounded-md"
                    placeholder="Search by Product"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap justify-center gap-6 p-5">
                {loading ? (
                    <p>Loading</p>
                ): error ? (
                    <p>{error}</p>
                ):
                
                filteredProducts.map(item => (
                    <ProductItem key={item.id} items={item} />
                ))}
            </div>
        </>
    );
}

export default ProductList;

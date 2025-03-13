import axios from "axios";
import { useEffect, useState } from "react";


function useProducts(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
               setLoading(true);
               try {
                const response=await axios.get(`https://dummyjson.com/products`);
                setProducts(response.data.products);
                
               }
               
               catch (error) {
                setError("Error fetching the data")
               }finally{
                 setLoading(false);
               }
            }
         fetchData()
        
    },[])
    return {products,error,loading} ;
}

export default useProducts;
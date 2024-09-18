import axios from "./utils/axios";
import { useEffect, useState } from "react";

function Show() {

    const [product, setprodects] = useState([]);

    const getProduct = async () => {
      // const api = "https://fakestoreapi.com/products";
      // After make utils anf axiox in different way with api
      axios
        .get("/products")
        .then((products) => {
          console.log(products);
          setprodects(products.data);
        })
        .catch((error) => console.log(error));
    };

    useEffect(()=>{
      getProduct()
    },[])

  return (

  <>
   

  <hr />
    <ul className="pt-5" >
     {product.length > 0 ? (
        product.map((p) => (
          <li key={p.id} className=" mb-2 rounded w-1/4 p-5 bg-red-200 ">{p.title}</li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
     </ul>
  </>
  )
}

export default Show

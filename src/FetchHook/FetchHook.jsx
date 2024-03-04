import { useEffect, useState } from "react";

const FetchHook = () => {
    const [products, setProducts]=useState()
    // console.log(products)
    useEffect(()=>{
      fetch('/brand.json')

      .then(res => res.json())
      .then(data => setProducts(data))
    },[])
    return [products]
};

export default FetchHook;
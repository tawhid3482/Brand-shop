import { useEffect, useState } from "react";

const FetchHook = () => {
    const [products, setProducts]=useState()
    useEffect(()=>{
      fetch('https://assingment-10-server-site-6z7rmnwc8-saikats-projects.vercel.app/products')

      .then(res => res.json())
      .then(data => setProducts(data))
    },[])
    return [products]
};

export default FetchHook;
import { useEffect, useState } from "react";

const UseHooks = () => {
    const [item , setitem]=useState({})

    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setitem(data))
    },[])
    return item
};

export default UseHooks;
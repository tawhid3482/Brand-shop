import { useEffect, useState } from "react";

const CustomFetch = () => {
  const [service, setService] = useState();
  useEffect(() =>{fetch("http://localhost:5000/brand")
    .then((res) => res.json())
    .then((data) => setService(data))}
  , []);
  
  return [service]

  
};

export default CustomFetch;

import { useEffect, useState } from "react";

const CustomFetch = () => {
  const [service, setService] = useState();
  useEffect(() =>{fetch("/brand.json")
    .then((res) => res.json())
    .then((data) => setService(data))}
  , []);
  
  return [service]

  
};

export default CustomFetch;

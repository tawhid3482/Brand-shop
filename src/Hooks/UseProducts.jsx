import { useEffect, useState } from "react";

const UseProducts = () => {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
        setLoading(false);
      });
  }, []);
  return [pro, loading];
};

export default UseProducts;

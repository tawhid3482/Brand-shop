import { useEffect, useState } from "react";

const UseProducts = () => {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assingment-10-server-site-6z7rmnwc8-saikats-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
        setLoading(false);
      });
  }, []);
  return [pro, loading];
};

export default UseProducts;

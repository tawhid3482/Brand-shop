import { useEffect, useState } from "react";

const UseBrands = () => {
    const [brand, setBrand] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("/brand.json")
        .then((res) => res.json())
        .then((data) => {
          setBrand(data);
          setLoading(false);
        });
    }, []);
    return [brand, loading];
};

export default UseBrands;
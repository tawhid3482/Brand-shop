import { Navigate, useLocation } from "react-router-dom";
import UseHook from "../UseHook/UseHook";

const PrivateProvider = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseHook();
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner bg-red-500 loading-lg "></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateProvider;

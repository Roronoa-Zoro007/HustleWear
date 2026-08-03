import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const ADMIN_UID = "3nwkoENLYGeoIHhRv3g7IPgTIV82";


function ProtectedAdmin({children}){

  const {user, loading} = useContext(AuthContext);


  if(loading){

    return <h2>Loading...</h2>;

  }


  if(!user){

    return <Navigate to="/login"/>

  }


  if(user.uid !== ADMIN_UID){

    return <Navigate to="/"/>

  }


  return children;

}


export default ProtectedAdmin;
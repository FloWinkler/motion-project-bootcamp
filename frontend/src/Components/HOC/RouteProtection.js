import { Navigate } from "react-router-dom";

function RouteProtection(props) {
  return localStorage.getItem("auth-token") ? props.route : <Navigate to="/signin" />;
}

export default RouteProtection;

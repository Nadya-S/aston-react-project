import { Navigate } from "react-router-dom";
import { routes } from "../../utils/routes";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to={routes.LOGIN_PAGE} replace />;
  }
  return children;
};

export default ProtectedRoute;

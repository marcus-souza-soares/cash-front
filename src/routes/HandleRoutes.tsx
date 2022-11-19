import { useAuth } from "../hooks/useAuth";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const HandleRoutes = (): JSX.Element => {
  const { signed } = useAuth();
  if (signed) {
    return <PrivateRoutes />;
  } else {
    return <PublicRoutes />;
  }
};

export default HandleRoutes;

import { useAuth } from "../hooks/useAuth";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const HandleRoutes = (): JSX.Element => {
  const { signed } = useAuth();
  console.log(signed);
  if (!signed) {
    return <PublicRoutes />;
  } else {
    return <PrivateRoutes />;
  }
};

export default HandleRoutes;

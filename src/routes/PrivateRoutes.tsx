import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/cadastro" element={<SignUp />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

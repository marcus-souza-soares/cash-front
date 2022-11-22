import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/cadastro" element={<SignUp />}></Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
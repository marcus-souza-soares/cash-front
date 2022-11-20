import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/cadastro" element={<SignUp />}></Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
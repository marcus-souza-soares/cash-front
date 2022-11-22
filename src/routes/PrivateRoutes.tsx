import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NewTransactionValue from "../pages/NewTransactionValue";
import NewTransactionTransfer from "../pages/NewTransactionTransfer";

export default function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/new/value" element={<NewTransactionValue />}></Route>
      <Route path="/new/transfer" element={<NewTransactionTransfer />}></Route>
      <Route path="/cadastro" element={<SignUp />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authContext";
import { AccountProvider } from "./contexts/accountContext";
import { TransactionProvider } from "./contexts/transactionContext";
import HandleRoutes from "./routes/HandleRoutes";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <AccountProvider>
            <TransactionProvider>
              <HandleRoutes />
            </TransactionProvider>
          </AccountProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

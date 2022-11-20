import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authContext";
import HandleRoutes from "./routes/HandleRoutes";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <HandleRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

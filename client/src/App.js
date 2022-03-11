import Signup from "./Components/SignUp/Signup";
import Login from './Components/LogIn/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import { AuthProvider } from "./Context/AuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./Components/Landing/Landing";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route  path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

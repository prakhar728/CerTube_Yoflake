import Signup from "./Components/SignUp/Signup";
import Login from './Components/LogIn/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import SearchBar from './Components/SearchBar/SearchBar';
import { AuthProvider } from "./Context/AuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Library from "./Components/Library/Library";
import VideoDetails from "./Components/VideoDetails/VideoDetails";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route  path="/library" element={<Library />} />
          <Route  path="/searchVideo" element={<SearchBar />} />
          <Route  path="/videoDetails" element={<VideoDetails />} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

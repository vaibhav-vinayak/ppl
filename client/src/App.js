import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import("components/Navbar"));
const Home = lazy(() => import("pages/Home"));
const Login = lazy(() => import("pages/Auth/Login"));
const Signup = lazy(() => import("pages/Auth/Signup"));

const App = () => (
  <Router>
    <Suspense fallback={null}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Suspense>
  </Router>
);

export default App;

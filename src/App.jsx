import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Welcome from './pages/Welcome';
import Categories from './pages/Categories';
import Scan from './pages/Scan';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-sans text-white">
        <Routes>
          {/* Welcome Screen - No navbar/footer */}
          <Route path="/welcome" element={<Welcome />} />

          {/* Dashboard Routes - Custom layout with menu */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Categories />} />
            <Route path="scan/:categoryId" element={<Scan />} />
          </Route>

          {/* Public Routes - With navbar/footer */}
          <Route path="*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

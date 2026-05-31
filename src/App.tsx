import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminBookings from './pages/AdminBookings';
import AdminLogin from './pages/AdminLogin';
import { ModalProvider } from './context/ModalContext';
import './App.css';

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminBookings />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;

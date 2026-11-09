import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Anggap kamu sudah buat navbar sederhana

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar /> 
      
      <main style={{ padding: '20px' }}>
        {/* Halaman utama/pages akan muncul di dalam Outlet ini */}
        <Outlet /> 
      </main>
      
      <footer>
        <p>© 2026 My React App</p>
      </footer>
    </div>
  );
}

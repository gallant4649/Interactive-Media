import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout utama membungkus semua halaman di bawahnya
    children: [
      {
        path: '', // Ini akan menjadi halaman utama (/)
        element: <Home />,
      },
      {
        path: 'about', // Ini akan menjadi (/about)
        element: <About />,
      },
    ],
  },
]);

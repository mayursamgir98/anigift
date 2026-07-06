import { useState, useEffect } from 'react';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ParticleBackground />
      <Navbar currentPage={page} onNavigate={navigate} />

      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'login' && <AuthPage mode="login" onNavigate={navigate} />}
      {page === 'signup' && <AuthPage mode="signup" onNavigate={navigate} />}

      <Footer />
    </>
  );
}

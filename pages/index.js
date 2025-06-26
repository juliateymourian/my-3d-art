import { useEffect } from 'react';
import { log } from '../lib/logger';

export default function Home() {
  useEffect(() => {
    // Log page load
    log.info('Home page loaded', {
      page: 'home',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    });

    // Simulate some application activity
    const timer = setTimeout(() => {
      log.info('Gallery initialization complete', {
        page: 'home',
        action: 'gallery_init',
        duration_ms: 1000,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGalleryClick = () => {
    log.info('Gallery clicked', {
      page: 'home',
      action: 'gallery_click',
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #ff9a9e, #fad0c4)' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '2rem' }}>Welcome to My 3D Cartoon Gallery!</h1>
        <button 
          onClick={handleGalleryClick}
          style={{ 
            padding: '1rem 2rem', 
            fontSize: '1.25rem', 
            backgroundColor: 'rgba(255,255,255,0.2)', 
            color: 'white', 
            border: '2px solid white', 
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Explore Gallery
        </button>
      </div>
    </div>
  );
}


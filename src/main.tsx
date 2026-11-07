import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ParallaxDemo from '@/demos/default';
import 'lenis/dist/lenis.css';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxDemo />
  </StrictMode>,
);

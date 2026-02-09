import { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import NavBarDark from '../component/Navbar/NavBarDark';
import NavBarLight from '../component/NavBarLight';
import HomePageDark from '../ComponentPages/HomePages/HomePageDark';
import HomePageLight from '../ComponentPages/HomePageLight';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Persist theme preference so it survives reloads
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
   
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(isDark) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.baseSpeedX = Math.random() * 1.5 - 0.75;
        this.baseSpeedY = Math.random() * 1.5 - 0.75;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.updateTheme(isDark);
      }

      updateTheme(isDark) {
        if (isDark) {
          // Dark mode: blues and purples
          this.hue = Math.random() * 60 + 200;
          this.brightness = Math.random() * 20 + 50;
          this.alpha = Math.random() * 0.5 + 0.5;
        } else {
          // Light mode: warm colors
          this.hue = Math.random() * 60 + 180;
          this.brightness = Math.random() * 20 + 40;
          this.alpha = Math.random() * 0.4 + 0.4;
        }
      }

      update(mouse, time, isMouseDown) {
        const waveInfluence = Math.sin(time * 0.001 + this.pulseOffset) * 0.3;
        this.speedX = this.baseSpeedX + waveInfluence;
        this.speedY = this.baseSpeedY + Math.cos(time * 0.001 + this.pulseOffset) * 0.3;

        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = isMouseDown ? 200 : 150;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const repelStrength = isMouseDown ? 5 : 3;
          this.x -= Math.cos(angle) * force * repelStrength;
          this.y -= Math.sin(angle) * force * repelStrength;
          this.hue = (this.hue + 2) % 360;
        }

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        this.size = (Math.random() * 2.5 + 1) + Math.sin(time * 0.003 + this.pulseOffset) * 0.5;
      }

      draw(ctx, isDark) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, ${this.brightness + 20}%, ${this.alpha})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, ${this.brightness}%, ${this.alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 60%, ${this.brightness - 10}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${this.hue}, 90%, ${this.brightness + 30}%, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(120, Math.floor(canvas.width * canvas.height / 10000));
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(isDarkMode));
      }
    };
    
    if (particlesRef.current.length === 0) {
      initParticles();
    } else {
      particlesRef.current.forEach(particle => particle.updateTheme(isDarkMode));
    }

    const animate = () => {
      timeRef.current += 1;
      
      if (isDarkMode) {
        ctx.fillStyle = 'rgba(10, 10, 20, 0.15)';
      } else {
        ctx.fillStyle = 'rgba(250, 250, 255, 0.15)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.4;
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${other.hue}, 70%, 60%, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      particlesRef.current.forEach(particle => {
        particle.update( isMouseDown);
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isMouseDown, isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative w-full h-screen overflow-hidden transition-colors duration-700 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Theme Toggle Button */}
      <div className=' relative ' >
      <button
        onClick={toggleTheme}
        className={`absolute size-[60px] cursor-pointer flex items-center justify-center mr-0 lg:mr-[250px] mb-[100px] lg:mb-[100px] top-6 right-8 p-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 z-10 ${
          isDarkMode
            ? 'bg-white/10 text-yellow-300 hover:bg-white/20'
            : 'bg-gray-900/10 text-purple-600 hover:bg-gray-900/20'
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

        {isDarkMode ? <NavBarDark/> : <NavBarLight/> } 
      </div>

      <div className=' relative' >
        {isDarkMode ? <HomePageDark/> : <HomePageLight/> }
      </div>

    </div>
  );
};

export default Home;
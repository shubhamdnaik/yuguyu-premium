const fs = require('fs');
const appPath = 'c:/Users/shubham naik/Desktop/premiumyugu/src/App.jsx';
let code = fs.readFileSync(appPath, 'utf8');

try {
  // 1. Replace HeroScene
  const heroSceneRegex = /const HeroScene \= \(\{ isMobile \}\) \=\> \{[\s\S]*?(?=function App\(\) \{)/;
  
  const newHeroScene = `const HeroScene = ({ isMobile }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const smoothX = useSpring(mousePosition.x * 40, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mousePosition.y * 40, { stiffness: 50, damping: 20 });
  
  return (
    <div ref={containerRef} style={{ position: 'relative', height: isMobile ? '500px' : '650px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', perspective: '1000px' }}>
      
      {/* Background Glow Layer */}
      <motion.div 
        style={{ x: smoothX, y: smoothY, position: 'absolute', width: '250px', height: '250px', background: 'var(--accent-red)', filter: 'blur(100px)', opacity: 0.3, zIndex: 0 }}
      />
      
      {/* Member App Core (Centerpiece) */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
         style={{ 
           x: isMobile ? 0 : smoothX, y: isMobile ? 0 : smoothY,
           width: isMobile ? '280px' : '320px', 
           height: isMobile ? '560px' : '640px', 
           zIndex: 10, 
           position: 'relative', 
           boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1) inset' 
         }}
         className="device-frame"
      >
         {/* Dynamic Island */}
         <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '30%', height: '28px', background: '#000', borderRadius: '20px', zIndex: 100, boxShadow: 'inset 0 0 4px rgba(255,255,255,0.2)' }}>
            <div style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
         </div>
         <PhoneCarousel />
      </motion.div>
    </div>
  );
};

`;

  code = code.replace(heroSceneRegex, newHeroScene);

  // 2. Replace CINEMATIC HERO section
  const heroSectionRegex = /\{\/\* 1\. CINEMATIC HERO \*\/\}[\s\S]*?(?=\{\/\* 2\. HORIZONTAL SCROLL PRODUCT JOURNEY \*\/})/;

  const newHeroSection = `{/* 1. CINEMATIC HERO */}
      <section className="section flex-center" style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        
        {/* Spotlight behind text */}
        <div style={{ position: 'absolute', top: '20%', left: '30%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--accent-glow-red) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0, opacity: 0.8 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Left Column: Text Content */}
            <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
              <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1, position: 'relative' }}>
                <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'block', color: 'var(--text-primary)' }}>
                  Turn Gyms Into Smart
                </motion.span>
                <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'block', fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '0.5rem' }}>
                  <span className="text-gradient">Fitness Ecosystems.</span>
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.4 }}
                style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '750px', color: 'var(--text-secondary)' }}
              >
                A member app, deeply integrated workout tracking, native community features, and automated smart vending for the modern gym.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ display: 'flex', gap: '1rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-accent" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
                >
                  Request Access <ArrowRight size={20} style={{ marginLeft: '10px' }}/>
                </motion.button>
                <button className="btn btn-secondary">Explore Platform</button>
              </motion.div>
            </div>

            {/* Right Column: Hero Scene */}
            <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
              <HeroScene isMobile={isMobile} />
            </div>

          </div>
        </div>
      </section>

      `;

  code = code.replace(heroSectionRegex, newHeroSection);

  fs.writeFileSync(appPath, code);
  console.log("SUCCESS");
} catch(e) {
  console.error("ERROR:");
  console.error(e);
}

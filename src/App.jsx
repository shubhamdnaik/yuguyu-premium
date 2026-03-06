import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Activity, Box, ArrowRight, TrendingUp, Users, DollarSign, Settings, LineChart, Database, LayoutDashboard, Utensils, RefreshCw, SmartphoneNfc, Menu, Zap, Target, User, Home, QrCode, Bell, Sun, Moon, Flame, Calendar } from 'lucide-react';
import './index.css';
 
// Hook for responsive JSX
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};

// Reusable animated card component that triggers instantly and smoothly
const MotionCard = ({ children, className = '', index = 0, style={} }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }}
      className={`glass-card ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// Custom UI Replicas based on User Screenshots
const AppDietTrackerUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2.5rem', background: 'var(--bg-primary)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="ui-card" style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
         <div className="ui-text-bold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
           <Activity size={14} color="var(--accent-green)"/> Hydration
         </div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem', marginTop: '2px' }}>Streak: 3 Days</div>
         <div style={{ width: '40px', height: '80px', background: 'var(--bg-tertiary)', borderRadius: '8px', margin: '1rem auto', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'var(--accent-green)' }}></div>
         </div>
         <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>2.1L</div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>/ 3L</div>
      </div>
      
      <div className="ui-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.25rem 1rem' }}>
         <div className="ui-text-bold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '1rem' }}>
           <Zap size={14} color="var(--accent-purple)"/> Calories
         </div>
         <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '6px solid var(--bg-tertiary)', borderTopColor: 'var(--accent-green)', borderRightColor: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span className="ui-text-bold" style={{ fontSize: '1.2rem', lineHeight: '1' }}>1850</span>
            <span className="ui-text-muted" style={{ fontSize: '0.6rem' }}>/ 2200</span>
         </div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem', marginTop: '1rem' }}>84% consumed</div>
      </div>
    </div>
    
     <div className="ui-card">
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
          <span className="ui-text-bold" style={{ fontSize: '0.8rem' }}>Protein</span>
          <span className="ui-text-muted" style={{ fontSize: '0.8rem' }}>130g / 150g</span>
       </div>
       <div className="progress-bar"><div className="progress-fill" style={{ width: '85%', background: 'var(--accent-green)' }}></div></div>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', marginTop: '1rem' }}>
          <span className="ui-text-bold" style={{ fontSize: '0.8rem' }}>Carbs</span>
          <span className="ui-text-muted" style={{ fontSize: '0.8rem' }}>170g / 250g</span>
       </div>
       <div className="progress-bar"><div className="progress-fill" style={{ width: '65%', background: 'var(--accent-purple)' }}></div></div>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', marginTop: '1rem' }}>
          <span className="ui-text-bold" style={{ fontSize: '0.8rem' }}>Fats</span>
          <span className="ui-text-muted" style={{ fontSize: '0.8rem' }}>66g / 70g</span>
       </div>
       <div className="progress-bar"><div className="progress-fill" style={{ width: '90%', background: 'var(--accent-orange)' }}></div></div>
    </div>
  </div>
);

const AppWorkoutUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2.5rem', background: 'var(--bg-primary)' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Push Day</div>
        <div style={{ background: 'var(--accent-purple)', color: '#fff', padding: '4px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 'bold' }}>55 min</div>
     </div>
     
     <div className="ui-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 59, 59, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Activity size={20} color="var(--accent-green)"/>
        </div>
        <div>
           <div className="ui-text-muted" style={{ fontSize: '0.75rem' }}>Avg Heart Rate</div>
           <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>142 BPM</div>
        </div>
     </div>

     <div className="ui-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
           <span className="ui-text-bold" style={{ fontSize: '0.9rem' }}>Bench Press</span>
           <span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>3 Sets</span>
        </div>
        
        {[ { reps: 10, weight: 60, rpe: 8 }, { reps: 8, weight: 65, rpe: 8.5 }, { reps: 6, weight: 70, rpe: 9 } ].map((set, i) => (
           <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', padding: '0.5rem', background: 'var(--bg-primary)', borderRadius: '8px' }}>
              <span className="ui-text-muted" style={{ width: '20px' }}>{i+1}</span>
              <span className="ui-text-bold">{set.weight}kg</span>
              <span className="ui-text-muted">x {set.reps}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-green)' }}>RPE {set.rpe}</span>
           </div>
        ))}
     </div>
  </div>
);

const AppScannerUI = () => (
  <div style={{ padding: '1.5rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem', background: 'radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
     <div className="ui-text-bold" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Access Gym</div>
     <div className="ui-text-muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>Scan QR at the turnstile <br/>to unlock the door</div>
     
     <div style={{ width: '200px', height: '200px', background: '#fff', borderRadius: '16px', padding: '1rem', position: 'relative', boxShadow: '0 0 40px rgba(255, 59, 59, 0.2)', display: 'flex', alignItems:'center', justifyContent: 'center' }}>
        <QrCode size={150} color="var(--accent-purple)"/>
        {/* Scanner Line Animation */}
        <motion.div 
           animate={{ top: ['0%', '98%', '0%'] }}
           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
           style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: 'var(--accent-green)', boxShadow: '0 0 10px var(--accent-green)' }}
        />
     </div>
     
     <div style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '100px', border: '1px solid var(--border-light)' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={18}/></div>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(196, 30, 58, 0.4)' }}><Box size={18} color="#fff"/></div>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Settings size={18}/></div>
     </div>
  </div>
);

const AppHomeScannerUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '2.5rem', background: 'var(--bg-primary)' }}>
     {/* Top Header */}
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       <div style={{ lineHeight: '1.2' }}>
         <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Good Evening,</div>
         <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Shubham</div>
       </div>
       <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,153,0,0.1)', border: '1px solid rgba(255,153,0,0.2)', padding: '4px 8px', borderRadius: '100px' }}>
           <Flame size={14} color="var(--accent-orange)"/>
           <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>5 Day Streak</span>
         </div>
         <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sun size={14} color="var(--text-secondary)"/></div>
         <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bell size={14} color="var(--text-secondary)"/></div>
       </div>
     </div>
     
     {/* QR Scanner Card */}
     <div className="ui-card flex-center" style={{ flexDirection: 'column', gap: '1rem', padding: '1.5rem', borderRadius: '24px' }}>
       <div style={{ width: '120px', height: '120px', background: 'rgba(196, 30, 58, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <QrCode size={80} color="var(--accent-purple)"/>
       </div>
       <div style={{ textAlign: 'center' }}>
         <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Scan to Enter Gym</div>
         <div className="ui-text-muted" style={{ fontSize: '0.8rem', marginTop: '4px' }}>Refreshes in <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>26s</span></div>
         <div style={{ fontSize: '0.7rem', color: 'var(--accent-green)', marginTop: '8px' }}>+5 Consistency Points on scan</div>
       </div>
     </div>
     
     {/* Community Events */}
     <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
         <div className="ui-text-bold" style={{ fontSize: '1rem' }}>Community Events</div>
         <div style={{ color: 'var(--accent-purple)', fontSize: '0.8rem', fontWeight: 'bold' }}>View All {'>'}</div>
       </div>
       
       <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
         <div style={{ minWidth: '160px', background: 'var(--bg-tertiary)', borderRadius: '16px', overflow: 'hidden', paddingBottom: '1rem' }}>
           <div style={{ height: '70px', background: 'linear-gradient(180deg, rgba(196, 30, 58, 0.4) 0%, var(--bg-tertiary) 100%)' }}></div>
           <div style={{ padding: '0 0.75rem' }}>
             <div style={{ background: 'rgba(255, 59, 59, 0.1)', color: 'var(--accent-green)', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '4px' }}>Gym Hosted</div>
             <div className="ui-text-bold" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>HIIT Challenge</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}><Calendar size={10} color="var(--text-secondary)"/><span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Today 6PM</span></div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={10} color="var(--text-secondary)"/><span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>24 joined</span></div>
               <div style={{ background: 'var(--accent-purple)', color: '#fff', fontSize: '0.7rem', padding: '4px 12px', borderRadius: '100px', fontWeight: 'bold' }}>Join</div>
             </div>
           </div>
         </div>
       </div>
     </div>
     
     {/* Bottom Nav */}
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 26, 40, 0.95)', padding: '0.75rem 1.5rem', borderRadius: '100px', margin: 'auto -0.5rem -0.5rem -0.5rem', border: '1px solid var(--border-light)' }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--accent-purple)', position: 'relative' }}>
         {/* glow behind active indicator */}
         <div style={{ position: 'absolute', bottom: '10px', width: '30px', height: '30px', background: 'var(--accent-purple)', filter: 'blur(15px)', opacity: 0.5 }}></div>
         <Home size={20} style={{ position: 'relative', zIndex: 2 }}/>
         <span style={{ fontSize: '0.6rem', fontWeight: 'bold', position: 'relative', zIndex: 2 }}>Home</span>
       </div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Utensils size={20}/><span style={{ fontSize: '0.6rem' }}>Diet</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Activity size={20}/><span style={{ fontSize: '0.6rem' }}>Workout</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Partner</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><User size={20}/><span style={{ fontSize: '0.6rem' }}>Profile</span></div>
     </div>
  </div>
);

const AppVendingUI = () => (
  <div style={{ padding: '1.5rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-primary)' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Smart Vendor 04</div>
        <div style={{ background: 'rgba(187,255,34,0.1)', color: 'var(--accent-green)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>Online</div>
     </div>
     
     <div className="ui-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Box size={20} color="#fff"/>
        </div>
        <div style={{ flex: 1 }}>
           <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Dispensing</div>
           <div className="ui-text-bold" style={{ fontSize: '0.9rem' }}>Whey Protein Isolate</div>
           <div style={{ width: '100%', height: '4px', background: 'var(--bg-tertiary)', borderRadius: '2px', marginTop: '6px', overflow: 'hidden' }}>
              <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ height: '100%', background: 'var(--accent-green)' }} />
           </div>
        </div>
     </div>
     
     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: 'auto' }}>
        <div className="ui-card flex-center" style={{ flexDirection: 'column', padding: '1rem' }}>
           <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Inventory</div>
           <div className="ui-text-bold" style={{ fontSize: '1.2rem', color: 'var(--accent-green)' }}>84%</div>
        </div>
        <div className="ui-card flex-center" style={{ flexDirection: 'column', padding: '1rem' }}>
           <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Today's Rev</div>
           <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>₹4,250</div>
        </div>
     </div>
  </div>
);

const PhoneCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screens = [<AppHomeScannerUI key="1" />, <AppDietTrackerUI key="2" />, <AppWorkoutUI key="3" />];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'inherit', background: 'var(--bg-primary)' }}>
      <AnimatePresence mode="wait">
        <motion.div
           key={currentIndex}
           initial={{ x: '100%', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           exit={{ x: '-100%', opacity: 0 }}
           transition={{ duration: 0.5, ease: "easeInOut" }}
           style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          {screens[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);

  return (
    <div className="app-wrapper">
      <div className="mesh-bg">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
      </div>

      <nav style={{ 
        padding: '1rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        backdropFilter: 'blur(12px)', 
        borderBottom: '1px solid var(--border-light)', 
        background: 'var(--glass-bg)' 
      }}>
        <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-logo)', letterSpacing: '-0.04em' }}>
          <span style={{ color: 'var(--text-primary)' }}>Yugu</span><span style={{ color: 'var(--accent-green)' }}>yu</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--bg-tertiary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--border-light)'
            }}
          >
            {isLightMode ? <Sun size={18} color="var(--text-primary)"/> : <Moon size={18} color="var(--text-primary)"/>}
          </button>
          <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>Demo</button>
        </div>
      </nav>

      {/* 1. THE VISION HERO */}
      <section className="section flex-center" style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
          >
            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Infrastructure for the <span className="text-gradient">Next Generation</span> <br/>of Gyms
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)' }}>
              Yuguyu connects members, gym operations, and in-gym nutrition into an intelligent fitness ecosystem built to power your <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>smart member retention engine</span>.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-primary">Request Demo <ArrowRight size={18} style={{ marginLeft: '10px' }}/></button>
              <button className="btn btn-secondary">See How It Works</button>
            </div>
          </motion.div>

          {/* Hero Visuals: Crisp UI elements with stagger */}
          <div style={{ marginTop: '6rem', position: 'relative', height: '480px', display: 'flex', justifyContent: 'center', maxWidth: '900px', margin: '6rem auto 0 auto' }}>
            
            {/* Animated Ecosystem SVG Background Connections - Hidden on mobile */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: window.innerWidth < 768 ? 'none' : 'block' }} xmlns="http://www.w3.org/2000/svg">
               <motion.path d="M 140 150 Q 250 150 450 250" fill="none" stroke="var(--accent-green)" strokeWidth="2" className="ecosystem-line" />
               <motion.path d="M 760 150 Q 650 150 450 250" fill="none" stroke="var(--accent-purple)" strokeWidth="2" className="ecosystem-line" />
               {/* Vending machine connection removed per separate unit requirement */}
            </svg>

            {/* Admin App - Responsive positioning */}
            <motion.div 
               initial={{ x: -100, y: 50, opacity: 0 }}
               animate={{ x: 0, y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
               className="ui-card" style={{ 
                 position: 'absolute', 
                 top: window.innerWidth < 768 ? '-40px' : '20px', 
                 left: window.innerWidth < 768 ? 'auto' : 0, 
                 width: window.innerWidth < 768 ? '200px' : '280px', 
                 height: window.innerWidth < 768 ? '160px' : '220px', 
                 zIndex: 2, 
                 background: 'var(--bg-secondary)', 
                 border: '1px solid var(--border-light)', 
                 boxShadow: '0 20px 40px rgba(0,0,0,0.8)', 
                 padding: window.innerWidth < 768 ? '1rem' : '1.5rem',
                 transform: window.innerWidth < 768 ? 'translateX(-80px)' : 'none'
               }}
            >
               <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.75rem' }}>
                 <LayoutDashboard size={window.innerWidth < 768 ? 16 : 20} color="var(--accent-purple)"/>
                 <span className="ui-text-bold" style={{ fontSize: window.innerWidth < 768 ? '0.8rem' : '1rem' }}>Operations</span>
               </div>
               <div className="ui-text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.7rem' }}>Monthly Revenue</div>
               <div className="ui-text-bold" style={{ fontSize: window.innerWidth < 768 ? '1.25rem' : '2rem', marginBottom: '0.75rem' }}>₹24,50k</div>
               <div className="progress-bar" style={{ height: '4px' }}><div className="progress-fill" style={{ width: '82%', background: 'var(--accent-purple)' }}></div></div>
            </motion.div>

            {/* Mobile App (Center piece) */}
             <motion.div 
               initial={{ y: 200, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 50 }}
               className="device-frame" style={{ 
                 width: window.innerWidth < 768 ? '240px' : '300px', 
                 height: window.innerWidth < 768 ? '500px' : '620px', 
                 zIndex: 10, 
                 position: 'absolute', 
                 bottom: window.innerWidth < 768 ? '-20px' : '-80px', 
                 background: 'var(--bg-primary)', 
                 boxShadow: '0 30px 60px rgba(0,0,0,0.9)' 
               }}
            >
               <PhoneCarousel />
            </motion.div>

            {/* Vending Machine Hardware UI - Responsive positioning */}
            <motion.div 
               initial={{ x: 100, y: 50, opacity: 0 }}
               animate={{ x: 0, y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 50 }}
               className="device-frame" style={{ 
                 position: 'absolute', 
                 top: window.innerWidth < 768 ? '40px' : '20px', 
                 right: window.innerWidth < 768 ? 'auto' : 0, 
                 width: window.innerWidth < 768 ? '180px' : '280px', 
                 height: window.innerWidth < 768 ? '180px' : '260px', 
                 borderRadius: '24px', 
                 zIndex: 3, 
                 border: '4px solid #282D42', 
                 boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                 transform: window.innerWidth < 768 ? 'translateX(90px) rotate(5deg)' : 'none'
               }}
            >
               <div style={{ transform: window.innerWidth < 768 ? 'scale(0.7)' : 'none', transformOrigin: 'top center' }}>
                 <AppVendingUI />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE BIG IDEA (Ecosystem Diagram) */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}
             style={{ marginBottom: '6rem' }}
          >
            One System That <br/><span className="text-gradient">Connects Everything</span>
          </motion.h2>
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '1000px', 
            margin: '4rem auto 0 auto', 
            padding: '2rem 0', 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '3rem' : '0',
            justifyContent: 'space-between', 
            alignItems: 'center', 
            minHeight: '300px' 
          }}>
            {/* SVG Glowing Connection Network */}
            {!isMobile && (
              <svg style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100px', transform: 'translateY(-50%)', zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                 <motion.path d="M 120 50 L 500 50" stroke="url(#blue-grad)" strokeWidth="3" className="ecosystem-line" fill="none" />
                 <motion.path d="M 880 50 L 500 50" stroke="url(#purple-grad)" strokeWidth="3" className="ecosystem-line" fill="none" />
                 <defs>
                   <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="var(--accent-green)" /><stop offset="100%" stopColor="var(--accent-purple)" /></linearGradient>
                   <linearGradient id="purple-grad" x1="1" y1="0" x2="0" y2="0"><stop offset="0%" stopColor="var(--text-primary)" /><stop offset="100%" stopColor="var(--accent-purple)" /></linearGradient>
                 </defs>
              </svg>
            )}
            
            <MotionCard index={0} style={{ padding: '2rem 1.5rem', width: isMobile ? '100%' : '220px', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--accent-green)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', boxShadow: '0 0 30px rgba(255, 59, 59, 0.15)' }}>
               <Smartphone size={32} color="var(--accent-green)"/>
               <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Member App</div>
            </MotionCard>
            
            <MotionCard index={1} style={{ padding: '2rem 1.5rem', width: isMobile ? '100%' : '260px', textAlign: 'center', background: 'var(--bg-tertiary)', border: '2px solid var(--accent-purple)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', boxShadow: '0 0 40px rgba(196, 30, 58, 0.3)' }}>
               <Database size={40} color="var(--accent-purple)"/>
               <div className="ui-text-bold" style={{ fontSize: '1.4rem' }}>Data Engine</div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>The Central Brain</div>
            </MotionCard>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 2, width: isMobile ? '100%' : 'auto' }}>
                <MotionCard index={2} style={{ padding: '1.5rem', width: isMobile ? '100%' : '220px', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <LayoutDashboard size={24} color="var(--accent-purple)"/>
                   <div className="ui-text-bold" style={{ fontSize: '1rem' }}>Gym Admin</div>
                </MotionCard>
                <MotionCard index={3} style={{ padding: '1.5rem', width: isMobile ? '100%' : '220px', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <Box size={24} color="var(--text-primary)"/>
                   <div className="ui-text-bold" style={{ fontSize: '1rem' }}>Smart Vending</div>
                </MotionCard>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT REVEAL */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
            
            {/* 4.1 Member App */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: isMobile ? '450px' : '600px', display: 'flex', justifyContent: 'center', width: '100%', order: isMobile ? 2 : 1 }}>
                <motion.div initial={{ opacity:0, x:-80, rotate: -5, scale: 0.9 }} whileInView={{ opacity:1, x: isMobile ? -60 : -130, rotate: -8, scale: isMobile ? 0.7 : 0.9 }} viewport={{ once:true }} transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }} className="device-frame" style={{ height: isMobile ? '400px' : '550px', position: 'absolute', top: '25px', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                  <AppWorkoutUI />
                </motion.div>
                <motion.div initial={{ opacity:0, y: 80, scale: 0.95 }} whileInView={{ opacity:1, y:0, rotate: 0, scale: isMobile ? 0.8 : 1 }} viewport={{ once:true }} transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }} className="device-frame" style={{ height: isMobile ? '450px' : '600px', position: 'absolute', zIndex: 3, boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
                  <AppDietTrackerUI />
                </motion.div>
                <motion.div initial={{ opacity:0, x:80, rotate: 5, scale: 0.9 }} whileInView={{ opacity:1, x: isMobile ? 60 : 130, rotate: 8, scale: isMobile ? 0.7 : 0.9 }} viewport={{ once:true }} transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }} className="device-frame" style={{ height: isMobile ? '400px' : '550px', position: 'absolute', top: '25px', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                  <AppHomeScannerUI />
                </motion.div>
              </div>
              <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ order: isMobile ? 1 : 2, textAlign: isMobile ? 'center' : 'left' }}>
                <h2 style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Your Fitness. <br/><span className="text-gradient">Fully Connected.</span></h2>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-green)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Member App</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Activity color="var(--text-primary)" size={24}/> Workout tracking & logs</li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Utensils color="var(--text-primary)" size={24}/> Diet insights & macros</li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Users color="var(--text-primary)" size={24}/> Community events</li>
                </ul>
              </motion.div>
            </div>

            {/* 4.2 Gym Admin Platform */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ order: isMobile ? 1 : 2, textAlign: isMobile ? 'center' : 'left' }}>
                <h2 style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Run Your Gym <br/><span className="text-gradient" style={{ color: 'var(--accent-purple)'}}>With Data.</span></h2>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Retention Engine</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Users color="var(--text-primary)" size={24}/> Pre-churn detection</li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><DollarSign color="var(--text-primary)" size={24}/> Automated remarketing</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="ui-card" style={{ height: '420px', width: '100%', padding: '0', order: 1, overflow: 'hidden', border: '1px solid var(--border-light)', display: 'flex' }}>
                 <div style={{ width: '80px', background: 'var(--bg-tertiary)', borderRight: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', gap: '2rem' }}>
                    <LayoutDashboard size={24} color="var(--accent-purple)" />
                    <Users size={24} color="var(--text-secondary)" />
                    <LineChart size={24} color="var(--text-secondary)" />
                 </div>
                 <div style={{ flex: 1, padding: '2rem', background: 'var(--bg-primary)' }}>
                    <div className="ui-text-bold" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Dashboard</div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                       <div style={{ flex: 1, background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                         <div className="ui-text-muted" style={{ marginBottom: '0.5rem' }}>Active Members</div>
                         <div className="ui-text-bold" style={{ fontSize: '1.5rem' }}>1,245</div>
                       </div>
                       <div style={{ flex: 1, background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--accent-purple)' }}>
                         <div className="ui-text-muted" style={{ marginBottom: '0.5rem', color: 'var(--text-primary)'}}>MRR Growth</div>
                         <div className="ui-text-bold" style={{ fontSize: '1.5rem', color: 'var(--accent-purple)'}}>+14.2%</div>
                       </div>
                    </div>
                    <div style={{ height: '180px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-light)', padding: '1rem' }}>
                       <div className="ui-text-muted">Attendance Overview</div>
                       <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '100px', padding: '0 1rem' }}>
                          <div style={{ width: '20px', height: '40%', background: 'var(--bg-tertiary)', borderRadius: '4px' }}></div>
                          <div style={{ width: '20px', height: '60%', background: 'var(--bg-tertiary)', borderRadius: '4px' }}></div>
                          <div style={{ width: '20px', height: '100%', background: 'var(--accent-purple)', borderRadius: '4px' }}></div>
                          <div style={{ width: '20px', height: '50%', background: 'var(--bg-tertiary)', borderRadius: '4px' }}></div>
                          <div style={{ width: '20px', height: '80%', background: 'var(--bg-tertiary)', borderRadius: '4px' }}></div>
                       </div>
                    </div>
                 </div>
              </motion.div>
            </div>

            {/* 4.3 CINEMATIC HARDWARE REVEAL */}
            <div style={{ marginTop: isMobile ? '5rem' : '10rem', position: 'relative', padding: isMobile ? '3rem 1.5rem' : '6rem 0', background: 'radial-gradient(ellipse at center, rgba(196, 30, 58, 0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '40px', border: '1px solid rgba(196, 30, 58, 0.1)' }}>
               <div style={{ textAlign: 'center', maxWidth: '800px', margin: isMobile ? '0 auto 3rem auto' : '0 auto 6rem auto' }}>
                  <motion.h2 initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Partner Hardware <br/><span className="text-gradient">Seamlessly Integrated.</span>
                  </motion.h2>
                  <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    Yuguyu integrates with category-leading vending providers. Hardware is managed via a dedicated provider app for specialized inventory control.
                  </motion.p>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(400px, 1fr) 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'center', padding: isMobile ? '0' : '0 4rem' }}>
                  {/* Sleek Hardware Render Mockup */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ type: 'spring', stiffness: 50 }} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                     <div style={{ width: isMobile ? '280px' : '380px', height: isMobile ? '480px' : '650px', background: 'linear-gradient(145deg, #1A1C23, #0A0A0E)', borderRadius: '32px', border: '4px solid #282D42', boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 2px 20px rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ transform: isMobile ? 'scale(0.75)' : 'none', transformOrigin: 'top center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                          {/* Vending Glass Panel */}
                          <div style={{ width: '100%', height: '65%', background: 'rgba(0,0,0,0.6)', borderRadius: '16px', border: '2px solid #111', boxShadow: 'inset 0 10px 40px rgba(0,0,0,0.9)', position: 'relative', overflow: 'hidden' }}>
                             {/* Shelf 1 */}
                             <div style={{ position: 'absolute', top: '33%', left: 0, width: '100%', height: '6px', background: '#111' }}></div>
                             <div style={{ position: 'absolute', top: '15%', left: '20%', width: '40px', height: '80px', background: 'linear-gradient(180deg, #333, #111)', borderRadius: '6px', boxShadow: '0 0 30px rgba(255, 59, 59, 0.4)' }}></div>
                             <div style={{ position: 'absolute', top: '48%', left: '50%', width: '40px', height: '80px', background: 'linear-gradient(180deg, #333, #111)', borderRadius: '6px', boxShadow: '0 0 30px rgba(196, 30, 58, 0.4)' }}></div>
                          </div>
                          {/* Hardware screen panel */}
                          <div style={{ width: '100%', flex: 1, background: '#0B0B0F', borderRadius: '16px', marginTop: '1.5rem', border: '1px solid #333', overflow: 'hidden', padding: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                             <div style={{ flex: 1, border: '1px solid rgba(255, 59, 59, 0.3)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'rgba(255, 59, 59, 0.05)' }}>
                                <QrCode size={40} color="var(--accent-green)" />
                                <div className="ui-text-bold" style={{ color: 'var(--accent-green)', fontSize: '1rem', textAlign: 'center', marginTop: '0.5rem' }}>Scan to Buy</div>
                             </div>
                          </div>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                     <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-green)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Independent Hardware Success</h3>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                         <div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Specialized Control App</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Managed by a dedicated unit-specific app from the machine provider.</p>
                         </div>
                         <div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Ecosystem Bridge</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Yuguyu provides the data bridge to link purchase history with gym operations.</p>
                         </div>
                     </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NETWORK EFFECT SECTION */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', overflow: 'hidden', padding: '10rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
             style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem auto' }}
          >
            The More Your Gym Runs on Yuguyu, <br/>
            <span className="text-gradient">The Smarter It Gets</span>
          </motion.h2>
          
          <div style={{ 
            position: 'relative', 
            height: isMobile ? 'auto' : '450px', 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '2rem' : '0',
            alignItems: 'center', 
            justifyContent: 'center', 
            maxWidth: '1000px', 
            margin: '0 auto' 
          }}>
            
            {/* The System Core / Brain */}
            <motion.div 
               animate={{ boxShadow: ['0 0 40px rgba(196, 30, 58, 0.2)', '0 0 80px rgba(196, 30, 58, 0.6)', '0 0 40px rgba(196, 30, 58, 0.2)'] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               style={{ width: isMobile ? '140px' : '180px', height: isMobile ? '140px' : '180px', background: 'var(--bg-tertiary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--accent-purple)', position: 'relative', zIndex: 10, order: isMobile ? 1 : 'unset' }}
            >
               <Database size={isMobile ? 60 : 80} color="var(--text-primary)" />
               <div style={{ position: 'absolute', bottom: '-30px', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.7rem' }}>Infrastructure Core</div>
            </motion.div>

            {/* SVG Data Stream Lines - Hidden on Mobile */}
            {!isMobile && (
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                 <motion.path d="M 150 50 Q 300 100 500 225" fill="none" stroke="var(--accent-green)" strokeWidth="2" className="ecosystem-line" />
                 <motion.path d="M 850 50 Q 700 100 500 225" fill="none" stroke="var(--accent-purple)" strokeWidth="2" className="ecosystem-line" />
                 <motion.path d="M 500 400 L 500 225" fill="none" stroke="var(--accent-orange)" strokeWidth="2" className="ecosystem-line" />
              </svg>
            )}

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="ui-card" style={{ position: isMobile ? 'static' : 'absolute', top: 0, left: '5%', padding: '1.25rem', background: 'rgba(11,11,15,0.8)', border: '1px solid var(--accent-green)', borderRadius: '16px', width: isMobile ? '100%' : 'auto', order: isMobile ? 2 : 'unset' }}>
               <div className="ui-text-bold">Member Activity Feed</div>
               <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Syncing Workout Stats...</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="ui-card" style={{ position: isMobile ? 'static' : 'absolute', top: 0, right: '5%', padding: '1.25rem', background: 'rgba(11,11,15,0.8)', border: '1px solid var(--accent-purple)', borderRadius: '16px', width: isMobile ? '100%' : 'auto', order: isMobile ? 3 : 'unset' }}>
               <div className="ui-text-bold">Gym Revenue Ledger</div>
               <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Processing Sales Data...</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="ui-card" style={{ position: isMobile ? 'static' : 'absolute', bottom: 0, padding: '1.25rem', background: 'rgba(11,11,15,0.8)', border: '1px solid var(--accent-orange)', borderRadius: '16px', width: isMobile ? '100%' : 'auto', order: isMobile ? 4 : 'unset' }}>
               <div className="ui-text-bold">Hardware Inventory</div>
               <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Monitoring Stock Levels...</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. GYM OWNER VALUE (Series A Reveal) */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid #111', padding: '10rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Turn Your Gym Into a <br/><span className="text-gradient">Smart Fitness Hub</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Yuguyu replaces static operations with a dynamic ecosystem that understands your members better than they do themselves.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '4rem' }}>
             {[
               { title: 'Higher Retention', desc: 'Pre-churn detection models identify at-risk members before they cancel.', icon: <Users color="var(--accent-purple)"/> },
               { title: 'New Revenue', desc: 'In-gym smart vending and integrated diet logs create high-margin revenue.', icon: <DollarSign color="var(--accent-green)"/> },
               { title: 'Data Assets', desc: 'Your gym starts being a data platform, increasing enterprise value.', icon: <Database color="var(--accent-blue)"/> },
               { title: 'Full Automation', desc: 'From door access to inventory, Yuguyu automates the repetitive.', icon: <Settings color="#fff"/> }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card" 
                  style={{ display: 'flex', gap: isMobile ? '1rem' : '2rem', padding: isMobile ? '1.5rem' : '3rem', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(11,11,15,0.4)', alignItems: 'center', borderRadius: '24px' }}
                >
                   <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>{item.icon}</div>
                   <div>
                      <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: isMobile ? '0.85rem' : '1rem' }}>{item.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER VISION (VERY IMPORTANT) */}
       <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: isMobile ? '5rem 0' : '10rem 0' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
              <motion.h2 
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                style={{ fontSize: isMobile ? '2rem' : '3.5rem', marginBottom: '1.5rem' }}
              >
                The Future of <br/><span className="text-gradient">Fitness Infrastructure</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.2 }}
                style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}
               >
                Gyms shouldn’t run on spreadsheets. Yuguyu connects training, nutrition, and operations to power your <b>smart member retention engine</b> and vibrant gym community.
              </motion.p>
          </div>
       </section>

      {/* 9. FINAL CONVERSION SECTION */}
      <section className="section" style={{ background: 'var(--bg-primary)', padding: isMobile ? '6rem 0' : '12rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(circle at 50% 100%, rgba(196, 30, 58, 0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.h2 initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} style={{ fontSize: isMobile ? '3rem' : '5.5rem', marginBottom: '2rem', letterSpacing: '-0.05em' }}>Upgrade Your Gym.</motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>Join the infrastructure powering the next generation of smart fitness hubs.</motion.p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Get Started Now <ArrowRight size={20} style={{ marginLeft: '12px' }} /></button>
            <button className="btn btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Partner Inquiry</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 4rem 4rem 4rem', borderTop: '1px solid var(--border-light)', background: 'var(--bg-secondary)' }}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: isMobile ? '3rem' : '4rem' }}>
            <div>
               <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-logo)', letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--text-primary)' }}>Yugu</span><span style={{ color: 'var(--accent-green)' }}>yu</span>
               </div>
               <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6 }}>The Operating System for Modern Gyms. Connecting members, infrastructure, and revenue into one intelligent ecosystem.</p>
            </div>
            <div className="responsive-grid" style={{ '--grid-cols': 3, '--grid-cols-mobile': 1, '--grid-gap-mobile': '2rem', gridColumn: isMobile ? '1' : '2 / span 3' }}>
               <div>
                  <div className="ui-text-bold" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Platform</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                     <li>Member App</li>
                     <li>Gym Admin</li>
                     <li>Smart Vending</li>
                  </ul>
               </div>
               <div>
                  <div className="ui-text-bold" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Company</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                     <li>About Us</li>
                     <li>Partners</li>
                     <li>Contact</li>
                  </ul>
               </div>
               <div>
                  <div className="ui-text-bold" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Social</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                     <li>Twitter</li>
                     <li>LinkedIn</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.03)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-start', gap: '1rem', color: 'var(--text-tertiary)', fontSize: '0.8rem', textAlign: isMobile ? 'center' : 'left' }}>
            <div>© 2026 Yuguyu Technologies. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
               <span>Privacy</span>
               <span>Terms</span>
            </div>
         </div>
      </footer>

    </div>
  );
}

export default App;

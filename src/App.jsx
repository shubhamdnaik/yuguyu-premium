import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Dumbbell, 
  Users, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  PieChart, 
  Box, 
  Shield, 
  Zap, 
  Moon, 
  Sun,
  QrCode,
  Activity,
  Trophy,
  Target,
  ChevronRight,
  TrendingUp,
  CreditCard,
  DollarSign, Settings, LineChart, Database, LayoutDashboard, Utensils, RefreshCw, SmartphoneNfc, Menu, Home, Bell, Flame, Calendar
} from 'lucide-react';
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
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={18}/></div>
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
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Profile</span></div>
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

// Horizontal Scroll Product Journey Component
const ProductJourney = ({ isMobile }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} style={{ position: 'relative', height: '400vh', background: 'var(--bg-primary)' }}>
      <div style={{ position: 'sticky', top: 0, display: 'flex', height: '100vh', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div style={{ x, display: 'flex', gap: '10vw', padding: '0 10vw' }}>
          
          {/* Scene 1: The Machine */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 1:</span> <br/>The Smart Vendor</h2>
               <p style={{ fontSize: '1.25rem' }}>A fully integrated hardware touchpoint placed right where your members train. Always stocked, always online.</p>
             </div>
             <div className="device-frame" style={{ width: isMobile ? '280px' : '360px', height: isMobile ? '400px' : '500px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AppVendingUI />
             </div>
          </div>

          {/* Scene 2: Scan */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1, order: isMobile ? 1 : 2 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 2:</span> <br/>Instant Access</h2>
               <p style={{ fontSize: '1.25rem' }}>Members simply scan with their Yuguyu app. No cash, no cards, no friction.</p>
             </div>
             <div className="device-frame" style={{ order: isMobile ? 2 : 1, width: isMobile ? '280px' : '360px', height: isMobile ? '500px' : '650px', transform: 'scale(0.9)' }}>
                <AppScannerUI />
             </div>
          </div>

          {/* Scene 3: App Experience */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 3:</span> <br/>Auto Macro Logging</h2>
               <p style={{ fontSize: '1.25rem' }}>Purchases instantly sync to the member's diet log. They get their protein, the app tracks their macros automatically.</p>
             </div>
             <div className="device-frame" style={{ width: isMobile ? '280px' : '360px', height: isMobile ? '500px' : '650px', transform: 'scale(0.95)' }}>
                <AppDietTrackerUI />
             </div>
          </div>

          {/* Scene 4: Gym Operations */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1, order: isMobile ? 1 : 2 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 4:</span> <br/>Dashboard Sync</h2>
               <p style={{ fontSize: '1.25rem' }}>Revenue tracking and inventory are updated instantly in the gym owner's dashboard. Complete operational visibility.</p>
             </div>
             <div className="glass-card" style={{ order: isMobile ? 2 : 1, width: isMobile ? '300px' : '450px', height: isMobile ? '250px' : '300px', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                   <LayoutDashboard size={28} color="var(--accent-purple)"/>
                   <span className="ui-text-bold" style={{ fontSize: '1.5rem' }}>Live Revenue</span>
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>+₹1,250</div>
                <div className="ui-text-muted">Item Sold: Whey Isolate (Vendor 04)</div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const HeroScene = ({ isMobile }) => {
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
  
  const midX = useSpring(mousePosition.x * -20, { stiffness: 50, damping: 20 });
  const midY = useSpring(mousePosition.y * -20, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} style={{ marginTop: '6rem', position: 'relative', height: '520px', display: 'flex', justifyContent: 'center', maxWidth: '1000px', margin: '6rem auto 0 auto', perspective: '1000px' }}>
      
      {/* Background Glow Layer */}
      <motion.div 
        style={{ x: smoothX, y: smoothY, position: 'absolute', top: '20%', left: '10%', width: '150px', height: '150px', background: 'var(--accent-red)', filter: 'blur(80px)', opacity: 0.3, zIndex: 0 }}
      />
      
      {/* Admin Operations Panel */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.9, rotateY: 10, rotateX: -10 }}
         animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
         transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
         style={{ 
           x: isMobile ? 0 : midX, y: isMobile ? 0 : midY,
           position: 'absolute', 
           top: isMobile ? '-40px' : '40px', 
           left: isMobile ? 'auto' : '20px', 
           width: isMobile ? '200px' : '300px', 
           height: isMobile ? '160px' : '240px', 
           zIndex: 2, 
           transform: isMobile ? 'translateX(-80px)' : 'none'
         }}
      >
        <div className="glass-card" style={{ width: '100%', height: '100%', padding: '1.5rem' }}>
           <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '1rem' }}>
             <LayoutDashboard size={20} color="var(--accent-orange)"/>
             <span className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Operations</span>
           </div>
           <div className="ui-text-muted" style={{ marginBottom: '0.25rem' }}>Monthly Revenue</div>
           <div className="ui-text-bold" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>₹42,50k</div>
           <div className="progress-bar" style={{ height: '6px' }}><div className="progress-fill" style={{ width: '88%', background: 'linear-gradient(90deg, var(--accent-red), var(--accent-orange))' }}></div></div>
        </div>
      </motion.div>

      {/* Main App (Centerpiece) */}
       <motion.div 
         initial={{ opacity: 0, y: 150 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 50 }}
         style={{ 
           x: isMobile ? 0 : smoothX, y: isMobile ? 0 : smoothY,
           width: isMobile ? '240px' : '320px', 
           height: isMobile ? '500px' : '640px', 
           zIndex: 10, 
           position: 'absolute', 
           bottom: isMobile ? '-20px' : '-80px', 
           boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1) inset' 
         }}
         className="device-frame"
      >
         <PhoneCarousel />
      </motion.div>

      {/* Vending Machine Hardware UI */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.9, rotateY: -10, rotateX: 10 }}
         animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
         transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
         style={{ 
           x: isMobile ? 0 : smoothX, y: isMobile ? 0 : smoothY,
           position: 'absolute', 
           top: isMobile ? '40px' : '20px', 
           right: isMobile ? 'auto' : 0, 
           width: isMobile ? '180px' : '280px', 
           height: isMobile ? '180px' : '280px', 
           zIndex: 3, 
           transform: isMobile ? 'translateX(90px) rotate(5deg)' : 'none'
         }}
      >
         <div className="glass-card" style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden', border: '1px solid var(--border-focus)' }}>
           <AppVendingUI />
         </div>
      </motion.div>
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
      <div className="bg-gradient-mesh">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      <nav className="nav-blur" style={{ 
        padding: '1rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100 
      }}>
        <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-logo)', letterSpacing: '-0.04em' }}>
          <span style={{ color: 'var(--text-primary)' }}>Yugu</span><span style={{ color: 'var(--accent-red)' }}>yu</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--glass-bg)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--border-light)',
              transition: 'all 0.2s ease'
            }}
          >
            {isLightMode ? <Sun size={18} color="var(--text-primary)"/> : <Moon size={18} color="var(--text-primary)"/>}
          </button>
          <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Demo</button>
        </div>
      </nav>

      {/* 1. CINEMATIC HERO */}
      <section className="section flex-center" style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        
        {/* Spotlight behind text */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--accent-glow-red) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0, opacity: 0.8 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
             
            {/* Staggered Word Reveal */}
            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1, position: 'relative' }}>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'block', color: 'var(--text-primary)' }}>
                Protein. <span className="text-gradient-accent">Instantly.</span>
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'block', fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                Smart Fuel For Modern Gyms.
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.4 }}
              style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)' }}
            >
              Yuguyu connects members, automated vending, and gym operations into a premium fitness ecosystem built for ultimate retention.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
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

          {/* Mouse-Tracked Floating 3D Scene */}
          <HeroScene isMobile={isMobile} />
        </div>
      </section>

      {/* 2. HORIZONTAL SCROLL PRODUCT JOURNEY */}
      <ProductJourney isMobile={isMobile} />

      {/* 4. INTERACTIVE FEATURES SECTION */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
             <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               A Premium Ecosystem <br/><span className="text-gradient">Built For Growth</span>
             </motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
             
             {/* Feature Card 1 */}
             <motion.div 
               whileHover={{ y: -10, scale: 1.02 }} 
               className="glass-card" 
               style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid rgba(255, 59, 59, 0.2)' }}
             >
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Activity size={28} color="var(--accent-red)"/>
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Intelligent Tracking</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Automated logging of dietary macros and workout sets directly from user interactions within the gym.</p>
             </motion.div>

             {/* Feature Card 2 */}
             <motion.div 
               whileHover={{ y: -10, scale: 1.02 }} 
               className="glass-card" 
               style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid rgba(147, 51, 234, 0.2)' }}
             >
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(147, 51, 234, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Users size={28} color="var(--accent-purple)"/>
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Community Engine</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Drive member retention with built-in challenges, leaderboards, and automated remarketing flows.</p>
             </motion.div>

             {/* Feature Card 3 */}
             <motion.div 
               whileHover={{ y: -10, scale: 1.02 }} 
               className="glass-card" 
               style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid rgba(234, 88, 12, 0.2)' }}
             >
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(234, 88, 12, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Database size={28} color="var(--accent-orange)"/>
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Unified Data</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Every interaction generates structured data, transforming your gym into a powerful data platform.</p>
             </motion.div>

          </div>
        </div>
      </section>

      {/* 5. ECOSYSTEM VISUAL FLOW */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', overflow: 'hidden', padding: '10rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--accent-glow-purple) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, opacity: 0.5 }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.h2 
             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
             style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem auto' }}
          >
            The Ecosystem of <br/>
            <span className="text-gradient">Continuous Engagement</span>
          </motion.h2>
          
          {/* Animated Ecosystem Diagram */}
          <div style={{ position: 'relative', height: isMobile ? 'auto' : '500px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2rem' : '0', alignItems: 'center', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Center Brain */}
            <motion.div 
               animate={{ boxShadow: ['0 0 40px rgba(147, 51, 234, 0.2)', '0 0 80px rgba(147, 51, 234, 0.6)', '0 0 40px rgba(147, 51, 234, 0.2)'] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               style={{ width: isMobile ? '140px' : '200px', height: isMobile ? '140px' : '200px', background: 'var(--bg-tertiary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--accent-purple)', position: 'relative', zIndex: 10, order: isMobile ? 1 : 'unset' }}
            >
               <Database size={isMobile ? 50 : 70} color="var(--text-primary)" />
               <div style={{ position: 'absolute', bottom: '-40px', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Data Core</div>
            </motion.div>

            {/* Glowing Connection Lines SVG */}
            {!isMobile && (
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                 <motion.path d="M 150 100 Q 300 150 500 250" fill="none" stroke="var(--accent-red)" strokeWidth="3" className="ecosystem-path" strokeLinecap="round" />
                 <motion.path d="M 850 100 Q 700 150 500 250" fill="none" stroke="var(--accent-purple)" strokeWidth="3" className="ecosystem-path" strokeLinecap="round" />
                 <motion.path d="M 500 450 L 500 250" fill="none" stroke="var(--accent-orange)" strokeWidth="3" className="ecosystem-path" strokeLinecap="round" />
              </svg>
            )}

            {/* Cards */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', top: '10%', left: '5%', padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 2 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Smartphone size={20} color="var(--accent-red)"/>
                  <div className="ui-text-bold">Member App</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Logs workouts & dictates purchases instantly.</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', top: '10%', right: '5%', padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 3 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <LayoutDashboard size={20} color="var(--accent-purple)"/>
                  <div className="ui-text-bold">Gym Ledger</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Revenue tracking & member churn prediction.</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', bottom: 0, padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 4 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Box size={20} color="var(--accent-orange)"/>
                  <div className="ui-text-bold">Smart Vendor</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Automated inventory tracking and sales.</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION SECTION */}
      <section className="section" style={{ background: 'var(--bg-primary)', padding: isMobile ? '6rem 0' : '12rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(ellipse at bottom, var(--accent-glow-red) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.h2 initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} style={{ fontSize: isMobile ? '3rem' : '5rem', marginBottom: '2rem' }}>
             Elevate Your Gym.
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
             Join the ecosystem powering the most advanced, connected fitness hubs in the world.
          </motion.p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1.5rem', justifyContent: 'center' }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-accent" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Get Started <ArrowRight size={20} style={{ marginLeft: '12px' }} /></motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Contact Sales</motion.button>
          </div>
        </div>
      </section>

      {/* CINEMATIC FOOTER */}
      <footer style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '4rem 1.5rem' : '6rem 4rem 4rem 4rem', background: '#020202' }}>
         <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-red), transparent)', opacity: 0.5 }}></div>
         <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: isMobile ? '3rem' : '4rem' }}>
            <div>
               <motion.div 
                 whileHover={{ textShadow: "0px 0px 20px rgba(225, 29, 72, 0.8)" }}
                 style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-logo)', letterSpacing: '-0.04em', marginBottom: '1.5rem', cursor: 'pointer', transition: 'text-shadow 0.3s' }}
               >
                  <span style={{ color: 'var(--text-primary)' }}>Yugu</span><span style={{ color: 'var(--accent-red)' }}>yu</span>
               </motion.div>
               <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '300px' }}>
                  The Operating System for Modern Gyms. Connecting members, infrastructure, and revenue.
               </p>
            </div>
            
            <div className="responsive-grid" style={{ '--grid-cols': 3, '--grid-cols-mobile': 1, '--grid-gap-mobile': '2rem', gridColumn: isMobile ? '1' : '2 / span 3' }}>
               <div>
                  <div className="ui-text-bold" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Platform</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>Member App</motion.li>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>Gym Admin</motion.li>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>Smart Vending</motion.li>
                  </ul>
               </div>
               <div>
                  <div className="ui-text-bold" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Company</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>About</motion.li>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>Careers</motion.li>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>Contact</motion.li>
                  </ul>
               </div>
               <div>
                  <div className="ui-text-bold" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Social</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>Twitter</motion.li>
                     <motion.li whileHover={{ color: '#fff', x: 5 }} style={{ cursor: 'pointer' }}>LinkedIn</motion.li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-start', gap: '1rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', textAlign: isMobile ? 'center' : 'left' }}>
            <div>© 2026 Yuguyu Technologies. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
               <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
               <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;

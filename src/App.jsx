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

// APPLE-STYLE APP SHOWCASE COMPONENT
const AppShowcase = ({ isMobile }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Derived state to determine which slide is active based on scroll (0 to 1)
  const activeIndex = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [0, 1, 2, 3, 3]
  );
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    return activeIndex.onChange((latest) => setCurrentSlide(Math.round(latest)));
  }, [activeIndex]);

  const slideData = [
    {
      title: "Enter Frictionless.",
      desc: "Members unlock the turnstiles and check in instantly via the secure QR entry system built right into the app.",
      component: <AppScannerUI />
    },
    {
      title: "Log & Track.",
      desc: "Your members track every set, rep, and macro-nutrient. All workout data lives inside your gym's custom app interface.",
      component: <AppWorkoutUI />
    },
    {
      title: "Community Feed.",
      desc: "Live gym leaderboards and events keep engagement high. A member highly connected to your community never churns.",
      component: <AppDietTrackerUI /> // Reusing this UI layout for now to represent generic app feed stats
    },
    {
      title: "Automated Reward.",
      desc: "The app seamlessly unlocks physical vending rewards post-workout. Seamlessly syncing purchase data to their macro tracking.",
      component: <AppVendingUI />
    }
  ];

  return (
    <section ref={containerRef} style={{ position: 'relative', height: '400vh', background: '#030303' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        {/* Background Depth Effects */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--accent-red) 0%, transparent 60%)', filter: 'blur(120px)', opacity: 0.15 }}></div>

        <div className="container" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: isMobile ? '2rem' : '6rem', width: '100%' }}>
           
           {/* Text Content Block */}
           <div style={{ flex: 1, paddingRight: isMobile ? 0 : '4rem', textAlign: isMobile ? 'center' : 'left' }}>
              <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}>
                <div className="ui-text-bold" style={{ color: 'var(--accent-red)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>The Member Experience</div>
                <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', lineHeight: 1.1, marginBottom: '2rem' }}>
                  <span style={{ color: '#fff' }}>{slideData[currentSlide]?.title}</span>
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: isMobile ? '0 auto' : '0' }}>
                  {slideData[currentSlide]?.desc}
                </p>
              </motion.div>
           </div>

           {/* Floating Device Showcase */}
           <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              
              <motion.div 
                 style={{ 
                   width: isMobile ? '300px' : '400px', 
                   height: isMobile ? '600px' : '800px', 
                   position: 'relative',
                   boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
                   scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
                 }}
                 className="device-frame"
              >
                 <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentSlide}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      {slideData[currentSlide]?.component}
                    </motion.div>
                 </AnimatePresence>
              </motion.div>

           </div>
        </div>
        
        {/* Scroll Progress Dots */}
        {!isMobile && (
          <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {slideData.map((_, i) => (
               <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: currentSlide === i ? 'var(--brand-red)' : 'rgba(255,255,255,0.2)', transition: 'background 0.3s' }}></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// GYM DASHBOARD SHOWCASE COMPONENT
const DashboardShowcase = ({ isMobile }) => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', background: '#08080A', paddingTop: isMobile ? '6rem' : '10rem', paddingBottom: isMobile ? '6rem' : '10rem', borderTop: '1px solid var(--border-light)' }}>
      {/* Background Gradients */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 60%)', filter: 'blur(120px)', opacity: 0.1, zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--accent-green) 0%, transparent 60%)', filter: 'blur(120px)', opacity: 0.05, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="ui-text-bold" style={{ color: 'var(--accent-purple)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>The Gym Ledger</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} style={{ fontSize: isMobile ? '2.5rem' : '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Operations, <span className="text-gradient">Automated.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            Total visibility into member retention, revenue, and engagement. Turn your gym into a data-driven enterprise with a modern SaaS dashboard.
          </motion.p>
        </div>

        {/* Dashboard Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once:true, margin: "-100px" }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 40 }}
          style={{ 
            background: 'var(--bg-secondary)', 
            borderRadius: '24px', 
            border: '1px solid rgba(255,255,255,0.05)', 
            boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 2px 20px rgba(255,255,255,0.02)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Dashboard Header Bar */}
          <div style={{ padding: '1rem 2rem', background: '#0F1014', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-red)' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-orange)' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
            </div>
            <div className="ui-text-muted" style={{ fontSize: '0.85rem' }}>yuguyu.com / admin / dashboard</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>A</div>
            </div>
          </div>

          {/* Dashboard Main Grid Workspace */}
          <div style={{ padding: isMobile ? '1.5rem' : '3rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '2rem' }}>
            
            {/* Sidebar (Desktop only) */}
            {!isMobile && (
              <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: '#fff', display: 'flex', gap: '10px', alignItems: 'center' }}><LayoutDashboard size={18}/> Overview</div>
                <div style={{ padding: '0.75rem 1rem', color: 'var(--text-tertiary)', display: 'flex', gap: '10px', alignItems: 'center' }}><Users size={18}/> Members</div>
                <div style={{ padding: '0.75rem 1rem', color: 'var(--text-tertiary)', display: 'flex', gap: '10px', alignItems: 'center' }}><Activity size={18}/> Engagement</div>
                <div style={{ padding: '0.75rem 1rem', color: 'var(--text-tertiary)', display: 'flex', gap: '10px', alignItems: 'center' }}><Box size={18}/> Vendor Sales</div>
                <div style={{ padding: '0.75rem 1rem', color: 'var(--text-tertiary)', display: 'flex', gap: '10px', alignItems: 'center' }}><Database size={18}/> Settings</div>
              </div>
            )}

            {/* Dashboard Content Grid */}
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
               
               {/* Metric 1: Retention */}
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <div className="ui-text-muted" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Active Retention</span>
                    <span style={{ color: 'var(--accent-green)' }}>+4.2%</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>92.8%</div>
                  {/* Animated Donut Chart representation */}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '1rem' }}>
                     <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                        <motion.circle 
                          cx="50" cy="50" r="40" fill="none" stroke="var(--accent-purple)" strokeWidth="12" 
                          strokeDasharray="251.2"
                          initial={{ strokeDashoffset: 251.2 }}
                          whileInView={{ strokeDashoffset: 251.2 * (1 - 0.928) }}
                          viewport={{ once:true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                     </svg>
                  </div>
               </motion.div>

               {/* Metric 2: Vending Revenue */}
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <div className="ui-text-muted" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Vendor Revenue (30d)</span>
                    <span style={{ color: 'var(--accent-green)' }}>+12%</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>₹42.5k</div>
                  {/* Animated Line Chart representation */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                     {[20, 35, 25, 45, 40, 60, 55, 75, 70, 90].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once:true }}
                          transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                          style={{ flex: 1, background: i > 7 ? 'var(--accent-red)' : 'rgba(225, 29, 72, 0.3)', borderRadius: '2px 2px 0 0' }}
                        />
                     ))}
                  </div>
               </motion.div>

               {/* Metric 3: Weekly Active Users */}
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.4 }} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <div className="ui-text-muted" style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Weekly Active Users</span>
                    <span style={{ color: 'var(--accent-green)' }}>+8%</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>1,402</div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-end' }}>
                     <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Top Community Event:</div>
                     <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-orange)' }}>
                        <div className="ui-text-bold" style={{ color: '#fff', fontSize: '0.9rem' }}>Summer Shred Challenge</div>
                        <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>342 Participants Actively Logging</div>
                     </div>
                  </div>
               </motion.div>

               {/* Wide Metric: Activity Stream (Spans multiple columns on desktop) */}
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.6 }} className="glass-card" style={{ padding: '1.5rem', gridColumn: isMobile ? '1' : '1 / -1' }}>
                  <div className="ui-text-bold" style={{ marginBottom: '1.5rem', color: '#fff' }}>Live Ecosystem Activity</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { time: 'Just now', user: 'Alex M.', action: 'Unlocked Whey Isolate', location: 'Vendor 02', icon: <Box size={16} color="var(--brand-red)" /> },
                      { time: '2 min ago', user: 'Sarah J.', action: 'Logged "Leg Day" Workout', location: 'App (Gym Floor)', icon: <Activity size={16} color="var(--accent-purple)" /> },
                      { time: '5 min ago', user: 'Mike T.', action: 'Scanned In', location: 'Front Desk Turnstile', icon: <QrCode size={16} color="var(--accent-green)" /> }
                    ].map((event, i) => (
                       <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1rem', borderBottom: i !== 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                         <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {event.icon}
                         </div>
                         <div style={{ flex: 1 }}>
                            <div style={{ color: '#fff', fontSize: '0.95rem' }}><strong>{event.user}</strong> {event.action}</div>
                            <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>{event.location}</div>
                         </div>
                         <div className="ui-text-muted" style={{ fontSize: '0.85rem' }}>{event.time}</div>
                       </div>
                    ))}
                  </div>
               </motion.div>

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
      
      {/* Member App Core (Centerpiece) */}
       <motion.div 
         initial={{ opacity: 0, y: 150 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
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

      {/* Analytics Panel (Left Wing) */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.9, x: -100, rotateY: 10, rotateX: -10 }}
         animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0, rotateX: 0 }}
         transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
         style={{ 
           x: isMobile ? 0 : midX, y: isMobile ? 0 : midY,
           position: 'absolute', 
           top: isMobile ? '10px' : '60px', 
           left: isMobile ? 'auto' : '20px', 
           width: isMobile ? '200px' : '280px', 
           height: isMobile ? '200px' : '240px', 
           zIndex: 2, 
           transform: isMobile ? 'translateX(-90px)' : 'none'
         }}
      >
        <div className="glass-card" style={{ width: '100%', height: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid rgba(147, 51, 234, 0.3)' }}>
           <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
             <LayoutDashboard size={20} color="var(--accent-purple)"/>
             <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Retention Rate</span>
           </div>
           
           <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
             <div className="ui-text-bold" style={{ fontSize: '2.5rem', color: '#fff', lineHeight: '1' }}>94%</div>
             <div style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem' }}>↑ +2%</div>
           </div>
           
           <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
              {[40, 60, 45, 80, 75, 90, 95].map((h, i) => (
                 <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? 'var(--accent-purple)' : 'var(--bg-tertiary)', borderRadius: '4px' }}></div>
              ))}
           </div>
        </div>
      </motion.div>


      {/* Reward Node (Right Wing) */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.9, x: 100, rotateY: -10, rotateX: 10 }}
         animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0, rotateX: 0 }}
         transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
         style={{ 
           x: isMobile ? 0 : smoothX, y: isMobile ? 0 : smoothY,
           position: 'absolute', 
           top: isMobile ? '60px' : '80px', 
           right: isMobile ? 'auto' : '20px', 
           width: isMobile ? '160px' : '220px', 
           height: isMobile ? 'auto' : 'auto', 
           zIndex: 11, 
           transform: isMobile ? 'translateX(100px)' : 'none'
         }}
      >
         <div className="glass-card" style={{ width: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(225, 29, 72, 0.3)', background: 'linear-gradient(180deg, rgba(225, 29, 72, 0.05), rgba(0,0,0,0.4))' }}>
           <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <Box size={20} color="var(--brand-red)"/>
           </div>
           <span className="ui-text-bold" style={{ fontSize: '1rem', textAlign: 'center' }}>Smart Reward Unlocked</span>
           <span className="ui-text-muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>Post-Workout</span>
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
              style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)' }}
            >
              A robust member app, deeply integrated workout tracking, native community features, and automated smart rewards for the modern gym.
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

      {/* 2. APPLE-STYLE APP SHOWCASE */}
      <AppShowcase isMobile={isMobile} />

      {/* 3. SAAS GYM DASHBOARD SHOWCASE */}
      <DashboardShowcase isMobile={isMobile} />

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
            
            {/* Center Brain (Activity / OS Core) */}
            <motion.div 
               animate={{ boxShadow: ['0 0 40px rgba(147, 51, 234, 0.2)', '0 0 80px rgba(147, 51, 234, 0.6)', '0 0 40px rgba(147, 51, 234, 0.2)'] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               style={{ width: isMobile ? '140px' : '200px', height: isMobile ? '140px' : '200px', background: 'var(--bg-tertiary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--accent-purple)', position: 'relative', zIndex: 10, order: isMobile ? 1 : 'unset' }}
            >
               <Activity size={isMobile ? 50 : 70} color="var(--text-primary)" />
               <div style={{ position: 'absolute', bottom: '-40px', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Member Activity</div>
            </motion.div>

            {/* Glowing Connection Lines SVG */}
            {!isMobile && (
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                 {/* App to Activity */}
                 <motion.path d="M 150 100 Q 300 150 500 250" fill="none" stroke="var(--accent-red)" strokeWidth="3" className="ecosystem-path" strokeLinecap="round" />
                 {/* Activity to Dashboard */}
                 <motion.path d="M 500 250 Q 700 150 850 100" fill="none" stroke="var(--accent-purple)" strokeWidth="3" className="ecosystem-path" strokeLinecap="round" />
                 {/* Activity/Dashboard to Reward */}
                 <motion.path d="M 500 250 L 500 450" fill="none" stroke="var(--accent-orange)" strokeWidth="3" className="ecosystem-path" strokeLinecap="round" />
              </svg>
            )}

            {/* Cards */}
            {/* Node 1: App */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', top: '10%', left: '5%', padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 2 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Smartphone size={20} color="var(--accent-red)"/>
                  <div className="ui-text-bold">1. Member App</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Workout logging, diets, and gym entry.</div>
            </motion.div>
            
            {/* Node 3: Dashboard */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', top: '10%', right: '5%', padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 3 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <LayoutDashboard size={20} color="var(--accent-purple)"/>
                  <div className="ui-text-bold">3. Gym Dashboard</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Analytics generated from member activity.</div>
            </motion.div>

            {/* Node 4: Reward */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', bottom: 0, padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 4 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Box size={20} color="var(--accent-orange)"/>
                  <div className="ui-text-bold">4. Reward System</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Smart vending modules serving automated post-workout rewards.</div>
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
         {/* 4.3 GYM OWNER BENEFITS (Replacing Hardware Focus) */}
            <div style={{ marginTop: isMobile ? '5rem' : '10rem', position: 'relative', padding: isMobile ? '3rem 1.5rem' : '6rem 4rem', background: 'var(--bg-tertiary)', borderRadius: '40px', border: '1px solid rgba(147, 51, 234, 0.15)' }}>
               <div style={{ textAlign: 'center', maxWidth: '800px', margin: isMobile ? '0 auto 3rem auto' : '0 auto 6rem auto' }}>
                  <motion.h2 initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Stop Managing. <br/><span className="text-gradient">Start Growing.</span>
                  </motion.h2>
                  <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                     Transform your gym into a data-driven business. Yuguyu's ecosystem provides the tools to engage members deeply and open entirely new automated revenue streams.
                  </motion.p>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '2rem' : '3rem', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ type: 'spring', stiffness: 50 }} className="glass-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', border: '1px solid rgba(255, 59, 59, 0.2)' }}>
                        <div style={{ padding: '1rem', background: 'rgba(225, 29, 72, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={28} color="var(--brand-red)" /></div>
                        <div>
                           <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Higher Retention</h4>
                           <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Identify at-risk members and engage them with native community challenges before they churn.</p>
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ type: 'spring', stiffness: 50, delay: 0.1 }} className="glass-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', border: '1px solid rgba(147, 51, 234, 0.2)' }}>
                        <div style={{ padding: '1rem', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Activity size={28} color="var(--accent-purple)" /></div>
                        <div>
                           <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Better Engagement</h4>
                           <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Members track their own progress natively, building a habit loop that keeps them tied to your gym.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ type: 'spring', stiffness: 50, delay: 0.2 }} className="glass-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', border: '1px solid rgba(234, 88, 12, 0.2)' }}>
                        <div style={{ padding: '1rem', background: 'rgba(234, 88, 12, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Box size={28} color="var(--accent-orange)" /></div>
                        <div>
                           <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Automated Rewards</h4>
                           <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Smart vending modules act as physical reward nodes, unlocking passive supplemental revenue.</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ type: 'spring', stiffness: 50, delay: 0.3 }} className="glass-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                        <div style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Database size={28} color="var(--accent-green)" /></div>
                        <div>
                           <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Member Analytics</h4>
                           <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Every interaction generates structured data, transforming your gym into a powerful enterprise asset.</p>
                        </div>
                    </motion.div>
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Activity, Box, ArrowRight, TrendingUp, Users, DollarSign, Settings, LineChart, Database, LayoutDashboard, Utensils, RefreshCw, SmartphoneNfc, Menu, Zap, Target, User, Home, QrCode, Bell, Sun, Flame, Calendar } from 'lucide-react';
import './index.css';

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
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 51, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Activity size={20} color="#ff3366"/>
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
     
     <div style={{ width: '200px', height: '200px', background: '#fff', borderRadius: '16px', padding: '1rem', position: 'relative', boxShadow: '0 0 40px rgba(187, 255, 34, 0.2)', display: 'flex', alignItems:'center', justifyContent: 'center' }}>
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
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(144, 65, 255, 0.4)' }}><Box size={18} color="#fff"/></div>
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
       <div style={{ width: '120px', height: '120px', background: 'rgba(144, 65, 255, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
           <div style={{ height: '70px', background: 'linear-gradient(180deg, rgba(144,65,255,0.4) 0%, var(--bg-tertiary) 100%)' }}></div>
           <div style={{ padding: '0 0.75rem' }}>
             <div style={{ background: 'rgba(187,255,34,0.1)', color: 'var(--accent-green)', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '4px' }}>Gym Hosted</div>
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
  return (
    <div className="app-wrapper">
      <div className="mesh-bg">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '1.5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15, 18, 28, 0.7)' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
          <span className="text-primary">Yugu</span><span style={{ color: 'var(--accent-purple)' }}>yu</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.9rem' }}>Request Demo</button>
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
          <div style={{ marginTop: '6rem', position: 'relative', height: '450px', display: 'flex', justifyContent: 'center', maxWidth: '800px', margin: '6rem auto 0 auto' }}>
            {/* Admin App */}
            <motion.div 
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
               className="ui-card" style={{ position: 'absolute', bottom: '40px', left: 0, width: '280px', height: '220px', zIndex: 2, background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', padding: '1.5rem' }}
            >
               <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1rem' }}>
                 <LayoutDashboard size={20} color="var(--accent-purple)"/>
                 <span className="ui-text-bold">Operations</span>
               </div>
               <div className="ui-text-muted" style={{ marginBottom: '0.5rem' }}>Monthly Revenue</div>
               <div className="ui-text-bold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>₹24,50,000 <span style={{ color: 'var(--accent-green)', fontSize: '1rem', fontWeight: 'normal' }}>+12%</span></div>
               <div className="progress-bar"><div className="progress-fill" style={{ width: '82%', background: 'var(--accent-purple)' }}></div></div>
            </motion.div>

            {/* Mobile App */}
             <motion.div 
               initial={{ y: 150, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 50 }}
               className="device-frame" style={{ width: '280px', height: '580px', zIndex: 10, position: 'absolute', bottom: '-40px', background: 'var(--bg-primary)' }}
            >
              <PhoneCarousel />
            </motion.div>

            {/* Workout Tracker Notification */}
            <motion.div 
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 50 }}
               className="ui-card" style={{ position: 'absolute', bottom: '80px', right: 0, width: '280px', zIndex: 3, background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', padding: '1.5rem' }}
            >
               <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1rem' }}>
                 <Activity size={20} color="var(--accent-green)"/>
                 <span className="ui-text-bold">Member Activity</span>
               </div>
               <div style={{ background: 'rgba(187, 255, 34, 0.1)', border: '1px solid rgba(187, 255, 34, 0.2)', padding: '10px', borderRadius: '8px', color: 'var(--text-primary)'}}>
                 <div className="ui-text-bold" style={{ fontSize: '0.9rem' }}>New Personal Record</div>
                 <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Shubham K. hit 70kg Bench Press</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h2>Gyms Are Running on <span style={{ color: '#ff3366' }}>Broken Systems</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Menu size={28}/>, title: 'Spreadsheets For Members' },
              { icon: <DollarSign size={28}/>, title: 'No Nutrition Tracking' },
              { icon: <Users size={28}/>, title: 'Poor Engagement' },
              { icon: <LineChart size={28}/>, title: 'No Live Analytics' },
            ].map((item, i) => (
              <MotionCard key={i} index={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', border: '1px solid rgba(255, 51, 102, 0.15)', background: 'var(--bg-primary)' }}>
                <div style={{ color: '#ff3366', background: 'rgba(255,51,102,0.1)', padding: '12px', borderRadius: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{item.title}</h3>
              </MotionCard>
            ))}
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
          
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '2rem', bottom: '2rem', left: '50%', width: '2px', background: 'var(--border-light)', zIndex: 0, transform: 'translateX(-50%)' }}>
               <motion.div 
                 animate={{ y: ['0%', '700%'], opacity: [0, 1, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                 style={{ width: '2px', height: '60px', background: 'var(--accent-purple)', boxShadow: '0 0 15px var(--accent-purple)' }}
               />
            </div>
            
            <MotionCard index={0} style={{ padding: '1.5rem', width: '320px', textAlign: 'center', background: 'var(--bg-primary)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
               <Smartphone size={24} color="var(--accent-green)"/>
               <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Member App</div>
            </MotionCard>
            <MotionCard index={1} style={{ padding: '1.5rem', width: '320px', textAlign: 'center', background: 'var(--bg-primary)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
               <LayoutDashboard size={24} color="var(--accent-purple)"/>
               <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Gym Management</div>
            </MotionCard>
            <MotionCard index={2} style={{ padding: '1.5rem', width: '320px', textAlign: 'center', background: 'var(--bg-primary)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
               <Box size={24} color="var(--text-primary)"/>
               <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Smart Vending</div>
            </MotionCard>
             <MotionCard index={3} style={{ padding: '1.5rem', width: '320px', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--accent-purple)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
               <Database size={24} color="var(--accent-purple)"/>
               <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Data Platform</div>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT REVEAL */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
            
            {/* 4.1 Member App */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <motion.div initial={{ opacity:0, x:-80, rotate: -5, scale: 0.9 }} whileInView={{ opacity:1, x: -130, rotate: -8, scale: 0.9 }} viewport={{ once:true }} transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }} className="device-frame" style={{ height: '550px', position: 'absolute', top: '25px', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                  <AppWorkoutUI />
                </motion.div>
                <motion.div initial={{ opacity:0, y: 80, scale: 0.95 }} whileInView={{ opacity:1, y:0, rotate: 0, scale: 1 }} viewport={{ once:true }} transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }} className="device-frame" style={{ height: '600px', position: 'absolute', zIndex: 3, boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
                  <AppDietTrackerUI />
                </motion.div>
                <motion.div initial={{ opacity:0, x:80, rotate: 5, scale: 0.9 }} whileInView={{ opacity:1, x: 130, rotate: 8, scale: 0.9 }} viewport={{ once:true }} transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }} className="device-frame" style={{ height: '550px', position: 'absolute', top: '25px', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                  <AppHomeScannerUI />
                </motion.div>
              </div>
              <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Your Fitness. <br/><span className="text-gradient">Fully Connected.</span></h2>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-green)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Member App</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Activity color="var(--text-primary)" size={24}/> Workout tracking & logs</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Utensils color="var(--text-primary)" size={24}/> Diet insights & macros</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Users color="var(--text-primary)" size={24}/> Community events & engagement</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><TrendingUp color="var(--text-primary)" size={24}/> Gamified progress & streaks</li>
                </ul>
              </motion.div>
            </div>

            {/* 4.2 Gym Admin Platform */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ order: 2 }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Run Your Gym <br/><span className="text-gradient" style={{ color: 'var(--accent-purple)'}}>With Data.</span></h2>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Smart Retention Engine</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Users color="var(--text-primary)" size={24}/> Pre-churn detection models</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><DollarSign color="var(--text-primary)" size={24}/> Automated remarketing campaigns</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><LineChart color="var(--text-primary)" size={24}/> Community growth tracking</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Settings color="var(--text-primary)" size={24}/> Operations Automation</li>
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

            {/* 4.3 Smart Gym Vending Machines */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="ui-card" style={{ height: '500px', margin: '0 auto', width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', border: '2px solid var(--border-light)', position: 'relative' }}>
                <Box size={100} color="var(--accent-green)" strokeWidth={1} style={{ opacity: 0.8 }} />
                <div style={{ marginTop: '2rem', padding: '1rem 2rem', background: '#000', borderRadius: '8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'monospace', fontSize: '1.2rem'}}>
                   SCAN TO PAY
                </div>
                 <div style={{ position: 'absolute', bottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '20px'}}>
                   <div style={{ width: '40px', height: '80px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}></div>
                   <div style={{ width: '40px', height: '80px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}></div>
                   <div style={{ width: '40px', height: '80px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}></div>
                 </div>
              </motion.div>
              <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Turn Nutrition <br/><span style={{ color: 'var(--accent-green)' }}>Into Revenue.</span></h2>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Smart Gym Vending Machines</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Box color="var(--text-primary)" size={24}/> Protein drinks & supplements</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><SmartphoneNfc color="var(--text-primary)" size={24}/> Integrated app payment</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><RefreshCw color="var(--text-primary)" size={24}/> Automatic restocking alerts</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', fontSize: '1.1rem' }}><Target color="var(--text-primary)" size={24}/> Target member nutrition needs</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NETWORK EFFECT SECTION */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
             style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}
          >
            The More Your Gym Runs on Yuguyu, <br/>
            <span className="text-gradient">The Smarter It Gets</span>
          </motion.h2>
          
          <div style={{ position: 'relative', marginTop: '6rem', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* The System Core */}
            <motion.div 
               animate={{ boxShadow: ['0 0 30px rgba(144, 65, 255, 0.2)', '0 0 60px rgba(144, 65, 255, 0.5)', '0 0 30px rgba(144, 65, 255, 0.2)'] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               style={{ width: '160px', height: '160px', background: 'var(--bg-tertiary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--accent-purple)', position: 'relative', zIndex: 10 }}
            >
               <Database size={64} color="var(--text-primary)" />
               <div style={{ position: 'absolute', bottom: '-40px', fontWeight: 'bold', color: 'var(--text-primary)' }}>Data Platform</div>
            </motion.div>

            {/* Inputs / Connections */}
            <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '15rem' }}>
                <div className="ui-card" style={{ padding: '1rem 2rem', background: 'var(--bg-primary)' }}>Workout → Data</div>
                <div className="ui-card" style={{ padding: '1rem 2rem', background: 'var(--bg-primary)' }}>Diet → Data</div>
            </div>
             <div className="ui-card" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', padding: '1rem 2rem', background: 'var(--bg-primary)' }}>Purchase → Data</div>

             {/* Animated Glow Lines */}
             <div style={{ position: 'absolute', top: '25%', left: '38%', width: '100px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-green))', transform: 'rotate(45deg)' }}></div>
             <div style={{ position: 'absolute', top: '25%', right: '38%', width: '100px', height: '2px', background: 'linear-gradient(270deg, transparent, var(--accent-purple))', transform: 'rotate(-45deg)' }}></div>
             <div style={{ position: 'absolute', bottom: '30%', left: '50%', width: '2px', height: '80px', background: 'linear-gradient(0deg, transparent, var(--accent-orange))', transform: 'translateX(-50%)' }}></div>
          </div>
        </div>
      </section>

      {/* 6. GYM OWNER VALUE */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '4rem' }}>Turn Your Gym Into a <br/><span className="text-gradient">Smart Fitness Hub</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Users size={32} color="var(--accent-purple)"/>, title: 'Higher Member Engagement' },
              { icon: <DollarSign size={32} color="var(--accent-green)"/>, title: 'New Revenue Streams' },
              { icon: <Settings size={32} color="#fff"/>, title: 'Automated Operations' },
              { icon: <LineChart size={32} color="var(--accent-orange)"/>, title: 'Real-time Insights' }
            ].map((b, i) => (
              <MotionCard key={i} index={i} className="flex-center" style={{ flexDirection: 'column', gap: '1.5rem', padding: '3rem 2rem' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '50%', border: '1px solid var(--border-light)' }}>{b.icon}</div>
                <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>{b.title}</div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER VISION (VERY IMPORTANT) */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '10rem 0' }}>
         <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
             <motion.h2 
               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
               style={{ fontSize: '3.5rem', marginBottom: '2rem' }}
             >
               The Future of <br/><span className="text-gradient">Fitness Infrastructure</span>
             </motion.h2>
             <motion.p 
               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: 0.2 }}
               style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}
              >
               Gyms shouldn’t run on spreadsheets. Yuguyu connects training, nutrition, and operations to power your <b>smart member retention engine</b> and vibrant gym community.
             </motion.p>
         </div>
      </section>

      {/* 9. FINAL CONVERSION SECTION */}
      <section className="section" style={{ background: 'var(--bg-secondary)', minHeight: '50vh', display: 'flex', alignItems: 'center', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '5rem', marginBottom: '3rem' }}>Upgrade Your Gym.</h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Request Demo</button>
            <button className="btn btn-secondary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Partner With Yuguyu</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;

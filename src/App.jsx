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
// Custom UI Replicas based on User Screenshots
const AppDietTrackerUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2.5rem', background: 'var(--bg-primary)', scrollbarWidth: 'none', paddingBottom: '6rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Diet Tracker</div>
        <div style={{ display: 'flex', gap: '8px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--border-light)', padding: '4px 8px', borderRadius: '8px', fontSize: '0.7rem' }}>
              <Target size={12} color="var(--accent-red)"/> Goals
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--border-light)', padding: '4px 8px', borderRadius: '8px', fontSize: '0.7rem' }}>
              <Calendar size={12} color="var(--accent-red)"/> Today
           </div>
        </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div className="ui-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1rem' }}>
         <div className="ui-text-bold" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
           <Activity size={14} color="var(--accent-red)"/> Hydration
         </div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem', marginTop: '2px' }}>Streak: 3 Days 💧</div>
         <div style={{ width: '40px', height: '80px', border: '2px solid var(--text-muted)', borderTop: 'none', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', margin: '1rem auto', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '10px', width: '20px', height: '10px', border: '2px solid var(--text-muted)', borderBottom: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: 'var(--accent-red)' }}></div>
         </div>
         <div className="ui-text-bold" style={{ fontSize: '1.2rem', textAlign: 'center' }}>2.1L</div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem', textAlign: 'center', marginBottom: '0.5rem' }}>/ 3L</div>
         <div style={{ background: 'var(--accent-crimson)', color: '#fff', textAlign: 'center', padding: '6px 0', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>+ 250ml</div>
      </div>
      
      <div className="ui-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1rem' }}>
         <div className="ui-text-bold" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
           <Flame size={14} color="var(--accent-red)"/> Calories
         </div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem', marginTop: '2px' }}>350 kcal left</div>
         <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '8px solid var(--bg-tertiary)', borderTopColor: 'var(--accent-red)', borderRightColor: 'var(--accent-crimson)', borderBottomColor: 'var(--brand-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '1rem auto' }}>
            <span className="ui-text-bold" style={{ fontSize: '1rem', lineHeight: '1' }}>1850</span>
            <span className="ui-text-muted" style={{ fontSize: '0.6rem' }}>/ 2200</span>
         </div>
         <div className="ui-text-muted" style={{ fontSize: '0.7rem', textAlign: 'center', marginTop: 'auto' }}>84% consumed</div>
      </div>
    </div>
    
     <div className="ui-card">
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span className="ui-text-bold" style={{ fontSize: '0.8rem' }}>Protein</span>
          <span className="ui-text-muted" style={{ fontSize: '0.8rem' }}>130g / 150g</span>
       </div>
       <div className="progress-bar"><div className="progress-fill" style={{ width: '85%', background: 'var(--accent-red)' }}></div></div>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', marginTop: '1rem' }}>
          <span className="ui-text-bold" style={{ fontSize: '0.8rem' }}>Carbs</span>
          <span className="ui-text-muted" style={{ fontSize: '0.8rem' }}>170g / 250g</span>
       </div>
       <div className="progress-bar"><div className="progress-fill" style={{ width: '65%', background: 'var(--accent-crimson)' }}></div></div>
       
       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', marginTop: '1rem' }}>
          <span className="ui-text-bold" style={{ fontSize: '0.8rem' }}>Fats</span>
          <span className="ui-text-muted" style={{ fontSize: '0.8rem' }}>66g / 70g</span>
       </div>
       <div className="progress-bar"><div className="progress-fill" style={{ width: '90%', background: 'var(--brand-red)' }}></div></div>
    </div>

    <div className="ui-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Macro Split</div>
        <div style={{ position: 'relative', width: '120px', height: '120px' }}>
           <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-red)" strokeWidth="16" strokeDasharray="100 251.2" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent-crimson)" strokeWidth="16" strokeDasharray="80 251.2" strokeDashoffset="-100" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--brand-red)" strokeWidth="16" strokeDasharray="71.2 251.2" strokeDashoffset="-180" />
           </svg>
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <span className="ui-text-bold" style={{ fontSize: '0.75rem', textAlign: 'center' }}>Balanced<br/>Intake</span>
           </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', marginTop: '1rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-red)' }}></div> Protein</div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-crimson)' }}></div> Carbs</div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-red)' }}></div> Fats</div>
        </div>
    </div>

     {/* Bottom Nav */}
     <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 26, 40, 0.95)', padding: '0.75rem 1.5rem', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--border-light)', zIndex: 10 }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Home size={20}/><span style={{ fontSize: '0.6rem' }}>Home</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--accent-red)', position: 'relative' }}>
         <div style={{ position: 'absolute', bottom: '10px', width: '30px', height: '30px', background: 'var(--accent-red)', filter: 'blur(15px)', opacity: 0.5 }}></div>
         <Utensils size={20} style={{ position: 'relative', zIndex: 2 }}/><span style={{ fontSize: '0.6rem', fontWeight: 'bold', position: 'relative', zIndex: 2 }}>Diet</span>
       </div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Activity size={20}/><span style={{ fontSize: '0.6rem' }}>Workout</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Partner</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Profile</span></div>
     </div>
  </div>
);

const AppWorkoutUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2.5rem', background: 'var(--bg-primary)', scrollbarWidth: 'none', paddingBottom: '6rem' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Workout</div>
        <div style={{ background: 'var(--border-light)', display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem' }}>
           <Calendar size={12} color="var(--accent-red)"/> Today
        </div>
     </div>

     <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg-tertiary)', padding: '4px', borderRadius: '8px' }}>
        <div style={{ flex: 1, textAlign: 'center', background: 'var(--accent-red)', color: '#fff', padding: '6px 0', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>Strength</div>
        <div style={{ flex: 1, textAlign: 'center', color: 'var(--text-muted)', padding: '6px 0', fontSize: '0.8rem' }}>Steps</div>
        <div style={{ flex: 1, textAlign: 'center', color: 'var(--text-muted)', padding: '6px 0', fontSize: '0.8rem' }}>Running</div>
     </div>
     
     <div className="ui-card" style={{ padding: '1.5rem 1rem' }}>
        <div className="ui-text-muted" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>Today's Workout</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
           <div>
              <div className="ui-text-bold" style={{ fontSize: '1.4rem', lineHeight: '1.2' }}>Push Day</div>
              <div style={{ color: 'var(--accent-red)', fontSize: '0.8rem', marginTop: '4px' }}>Chest • Shoulders • Triceps</div>
           </div>
           <div style={{ background: 'var(--accent-red)', color: '#fff', padding: '8px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
              ▶ Start
           </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
           <span>~45 min</span>
           <span>6 exercises</span>
           <span>Intermediate</span>
        </div>
     </div>

     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 4px', marginTop: '0.5rem' }}>
        <Zap size={16} color="var(--accent-red)"/>
        <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Personal Records</span>
     </div>

     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {[
           { name: "Bench Press", weight: "100kg", time: "2 days ago" },
           { name: "Squat", weight: "140kg", time: "Last week" },
           { name: "Deadlift", weight: "180kg", time: "3 days ago" },
           { name: "OHP", weight: "65kg", time: "Today!" }
        ].map((pr, i) => (
           <div key={i} className="ui-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span className="ui-text-bold" style={{ fontSize: '0.85rem' }}>{pr.name}</span>
              <span style={{ fontSize: '1.2rem', color: 'var(--accent-red)', fontWeight: 'bold' }}>{pr.weight}</span>
              <span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>{pr.time}</span>
           </div>
        ))}
     </div>

     <div className="ui-card" style={{ padding: '1.25rem 1rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '1rem', marginBottom: '1rem' }}>Weekly Summary</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-red)', fontSize: '1.5rem', fontWeight: 'bold' }}>5</div>
              <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Workouts</div>
           </div>
           <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-crimson)', fontSize: '1.5rem', fontWeight: 'bold' }}>18</div>
              <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Sets/Day Avg</div>
           </div>
           <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--brand-red)', fontSize: '1.5rem', fontWeight: 'bold' }}>+8%</div>
              <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Growth</div>
           </div>
        </div>
     </div>

     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 4px', marginTop: '0.5rem' }}>
        <TrendingUp size={16} color="var(--accent-red)"/>
        <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Workout Insights</span>
     </div>
     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
        <div className="ui-card flex-center" style={{ flexDirection: 'column', padding: '0.75rem 0' }}>
           <div style={{ color: 'var(--accent-red)', fontSize: '1.2rem', fontWeight: 'bold' }}>5</div>
           <div className="ui-text-muted" style={{ fontSize: '0.65rem' }}>This Week</div>
        </div>
        <div className="ui-card flex-center" style={{ flexDirection: 'column', padding: '0.75rem 0' }}>
           <div style={{ color: 'var(--accent-crimson)', fontSize: '1.2rem', fontWeight: 'bold' }}>+12%</div>
           <div className="ui-text-muted" style={{ fontSize: '0.65rem' }}>PR Growth</div>
        </div>
        <div className="ui-card flex-center" style={{ flexDirection: 'column', padding: '0.75rem 0' }}>
           <div style={{ color: 'var(--accent-red)', fontSize: '1.2rem', fontWeight: 'bold' }}>92</div>
           <div className="ui-text-muted" style={{ fontSize: '0.65rem' }}>Score</div>
        </div>
     </div>

     {/* Bottom Nav */}
     <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 26, 40, 0.95)', padding: '0.75rem 1.5rem', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--border-light)', zIndex: 10 }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Home size={20}/><span style={{ fontSize: '0.6rem' }}>Home</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Utensils size={20}/><span style={{ fontSize: '0.6rem' }}>Diet</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--accent-red)', position: 'relative' }}>
         <div style={{ position: 'absolute', bottom: '10px', width: '30px', height: '30px', background: 'var(--accent-red)', filter: 'blur(15px)', opacity: 0.5 }}></div>
         <Activity size={20} style={{ position: 'relative', zIndex: 2 }}/><span style={{ fontSize: '0.6rem', fontWeight: 'bold', position: 'relative', zIndex: 2 }}>Workout</span>
       </div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Partner</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Profile</span></div>
     </div>
  </div>
);

const AppScannerUI = () => (
  <div style={{ padding: '1.5rem', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem', background: 'radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
     <div className="ui-text-bold" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Access Gym</div>
     <div className="ui-text-muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>Scan QR at the turnstile <br/>to unlock the door</div>
     
     <div style={{ width: '200px', height: '200px', background: '#fff', borderRadius: '16px', padding: '1rem', position: 'relative', boxShadow: '0 0 40px rgba(225, 29, 72, 0.2)', display: 'flex', alignItems:'center', justifyContent: 'center' }}>
        <QrCode size={150} color="var(--accent-red)"/>
        {/* Scanner Line Animation */}
        <motion.div 
           animate={{ top: ['0%', '98%', '0%'] }}
           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
           style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: 'var(--accent-red)', boxShadow: '0 0 10px var(--accent-red)' }}
        />
     </div>
     
     <div style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '100px', border: '1px solid var(--border-light)' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={18}/></div>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(225, 29, 72, 0.4)' }}><QrCode size={18} color="#fff"/></div>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Settings size={18}/></div>
     </div>
  </div>
);

const AppHomeScannerUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '2.5rem', background: 'var(--bg-primary)', scrollbarWidth: 'none', paddingBottom: '6rem' }}>
     {/* Top Header */}
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       <div style={{ lineHeight: '1.2' }}>
         <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Good Evening,</div>
         <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Shubham</div>
       </div>
       <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(225, 29, 72, 0.1)', border: '1px solid rgba(225, 29, 72, 0.2)', padding: '4px 8px', borderRadius: '100px' }}>
           <Flame size={14} color="var(--accent-red)"/>
           <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>5 Day Streak</span>
         </div>
         <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sun size={14} color="var(--text-secondary)"/></div>
         <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bell size={14} color="var(--text-secondary)"/></div>
       </div>
     </div>
     
     {/* QR Scanner Card */}
     <div className="ui-card flex-center" style={{ flexDirection: 'column', gap: '1rem', padding: '1.5rem', borderRadius: '24px' }}>
       <div style={{ width: '120px', height: '120px', background: 'rgba(225, 29, 72, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <QrCode size={80} color="var(--accent-red)"/>
       </div>
       <div style={{ textAlign: 'center' }}>
         <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Scan to Enter Gym</div>
         <div className="ui-text-muted" style={{ fontSize: '0.8rem', marginTop: '4px' }}>Refreshes in <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>26s</span></div>
         <div style={{ fontSize: '0.7rem', color: 'var(--accent-red)', marginTop: '8px' }}>+5 Consistency Points on scan</div>
       </div>
     </div>
     
     {/* Community Events */}
     <div style={{ display: 'flex', flexDirection: 'column' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
         <div className="ui-text-bold" style={{ fontSize: '1rem' }}>Community Events</div>
         <div style={{ color: 'var(--accent-red)', fontSize: '0.8rem', fontWeight: 'bold' }}>View All {'>'}</div>
       </div>
       
       <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
         <div style={{ minWidth: '160px', background: 'var(--bg-tertiary)', borderRadius: '16px', overflow: 'hidden', paddingBottom: '1rem' }}>
           <div style={{ height: '70px', background: 'linear-gradient(180deg, rgba(225, 29, 72, 0.3) 0%, var(--bg-tertiary) 100%)' }}></div>
           <div style={{ padding: '0 0.75rem' }}>
             <div style={{ background: 'rgba(225, 29, 72, 0.1)', color: 'var(--accent-red)', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '4px' }}>Gym Hosted</div>
             <div className="ui-text-bold" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>HIIT Challenge</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}><Calendar size={10} color="var(--text-secondary)"/><span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Today 6PM</span></div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={10} color="var(--text-secondary)"/><span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>24 joined</span></div>
               <div style={{ background: 'var(--accent-red)', color: '#fff', fontSize: '0.7rem', padding: '4px 12px', borderRadius: '100px', fontWeight: 'bold' }}>Join</div>
             </div>
           </div>
         </div>

         <div style={{ minWidth: '160px', background: 'var(--bg-tertiary)', borderRadius: '16px', overflow: 'hidden', paddingBottom: '1rem' }}>
           <div style={{ height: '70px', background: 'linear-gradient(180deg, rgba(153, 27, 27, 0.3) 0%, var(--bg-tertiary) 100%)' }}></div>
           <div style={{ padding: '0 0.75rem' }}>
             <div style={{ background: 'rgba(225, 29, 72, 0.1)', color: 'var(--accent-crimson)', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '4px' }}>Yuguyu Hosted</div>
             <div className="ui-text-bold" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Yoga Sunrise</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}><Calendar size={10} color="var(--text-secondary)"/><span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Tomorrow 7AM</span></div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={10} color="var(--text-secondary)"/><span className="ui-text-muted" style={{ fontSize: '0.7rem' }}>18 joined</span></div>
               <div style={{ background: 'var(--border-light)', color: 'var(--text-muted)', fontSize: '0.7rem', padding: '4px 12px', borderRadius: '100px', fontWeight: 'bold' }}>Join</div>
             </div>
           </div>
         </div>
       </div>
     </div>

     {/* Leaderboard Card Fragment */}
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
           <Trophy size={16} color="var(--accent-red)"/>
           <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Leaderboard</span>
        </div>
        <div style={{ background: 'var(--border-light)', display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem' }}>
           Weekly <ChevronRight size={12}/>
        </div>
     </div>
     <div className="ui-card flex-center" style={{ height: '80px', overflow: 'hidden', position: 'relative' }}>
         <div style={{ position: 'absolute', top: '10px', width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--accent-red)', opacity: 0.5 }}></div>
         <span className="ui-text-muted" style={{ position: 'relative', zIndex: 1, fontSize: '0.8rem' }}>Leaderboard loading...</span>
     </div>
     
     {/* Bottom Nav */}
     <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 26, 40, 0.95)', padding: '0.75rem 1.5rem', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--border-light)', zIndex: 10 }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--accent-red)', position: 'relative' }}>
         {/* glow behind active indicator */}
         <div style={{ position: 'absolute', bottom: '10px', width: '30px', height: '30px', background: 'var(--accent-red)', filter: 'blur(15px)', opacity: 0.5 }}></div>
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

const AppProfileUI = () => (
  <div style={{ padding: '0 1.25rem 1.5rem 1.25rem', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2.5rem', background: 'var(--bg-primary)', scrollbarWidth: 'none', paddingBottom: '6rem' }}>
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', border: '2px solid var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
           <span className="ui-text-bold" style={{ fontSize: '1.5rem', color: 'var(--accent-red)' }}>SK</span>
        </div>
        <div className="ui-text-bold" style={{ fontSize: '1.2rem' }}>Shubham K.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(225, 29, 72, 0.1)', color: 'var(--accent-red)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 'bold', marginTop: '4px' }}>
           <Shield size={12}/> Premium Member
        </div>
     </div>

     <div className="ui-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Membership</div>
           <div style={{ background: 'rgba(225, 29, 72, 0.1)', color: 'var(--accent-red)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>Active</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span className="ui-text-muted" style={{ fontSize: '0.85rem' }}>Plan</span>
           <span className="ui-text-bold" style={{ fontSize: '0.9rem' }}>Premium Annual</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span className="ui-text-muted" style={{ fontSize: '0.85rem' }}>Renewal</span>
           <span className="ui-text-bold" style={{ fontSize: '0.9rem' }}>March 15, 2026</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span className="ui-text-muted" style={{ fontSize: '0.85rem' }}>Billing</span>
           <span className="ui-text-bold" style={{ fontSize: '0.9rem' }}>₹8,999/year</span>
        </div>
        <div style={{ background: 'var(--accent-red)', color: '#fff', textAlign: 'center', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem' }}>Upgrade Plan</div>
     </div>

     <div className="ui-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
           <span style={{ color: 'var(--text-muted)' }}>⏸</span>
           <span className="ui-text-bold" style={{ fontSize: '0.9rem' }}>Pause Membership</span>
        </div>
        <div style={{ width: '40px', height: '20px', borderRadius: '100px', background: 'var(--bg-tertiary)', position: 'relative' }}>
           <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--text-muted)', position: 'absolute', top: '2px', left: '2px' }}></div>
        </div>
     </div>

     <div className="ui-card" style={{ padding: '0.5rem 0' }}>
        {[
           { icon: <Settings size={16}/>, label: "Edit Profile" },
           { icon: <Bell size={16}/>, label: "Notifications" },
           { icon: <CreditCard size={16}/>, label: "Payment Methods" }
        ].map((item, i) => (
           <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <div style={{ color: 'var(--text-muted)' }}>{item.icon}</div>
                 <span className="ui-text-muted" style={{ fontSize: '0.9rem' }}>{item.label}</span>
              </div>
              <ChevronRight size={16} color="var(--text-muted)"/>
           </div>
        ))}
     </div>

     <div className="ui-card" style={{ padding: '1rem', border: '1px solid rgba(225, 29, 72, 0.3)', marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-red)' }}>
           <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>↪</span>
           <span className="ui-text-bold" style={{ fontSize: '0.9rem' }}>Log Out</span>
        </div>
     </div>

     {/* Bottom Nav */}
     <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 26, 40, 0.95)', padding: '0.75rem 1.5rem', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--border-light)', zIndex: 10 }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Home size={20}/><span style={{ fontSize: '0.6rem' }}>Home</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Utensils size={20}/><span style={{ fontSize: '0.6rem' }}>Diet</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Activity size={20}/><span style={{ fontSize: '0.6rem' }}>Workout</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}><Users size={20}/><span style={{ fontSize: '0.6rem' }}>Partner</span></div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--accent-red)', position: 'relative' }}>
         <div style={{ position: 'absolute', bottom: '10px', width: '30px', height: '30px', background: 'var(--accent-red)', filter: 'blur(15px)', opacity: 0.5 }}></div>
         <Users size={20} style={{ position: 'relative', zIndex: 2 }}/><span style={{ fontSize: '0.6rem', fontWeight: 'bold', position: 'relative', zIndex: 2 }}>Profile</span>
       </div>
     </div>
  </div>
);

const AppVendingUI = () => (
  <div style={{ padding: '1.5rem', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-primary)', scrollbarWidth: 'none', paddingBottom: '6rem' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '1.1rem' }}>Smart Vendor 04</div>
        <div style={{ background: 'rgba(225, 29, 72, 0.1)', color: 'var(--accent-red)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>Online</div>
     </div>
     
     <div className="ui-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Target size={20} color="#fff"/>
        </div>
        <div style={{ flex: 1 }}>
           <div className="ui-text-muted" style={{ fontSize: '0.7rem' }}>Dispensing</div>
           <div className="ui-text-bold" style={{ fontSize: '0.9rem' }}>Whey Protein Isolate</div>
           <div style={{ width: '100%', height: '4px', background: 'var(--bg-tertiary)', borderRadius: '2px', marginTop: '6px', overflow: 'hidden' }}>
              <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ height: '100%', background: 'var(--accent-red)' }} />
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
  const screens = [<AppHomeScannerUI key="1" />, <AppDietTrackerUI key="2" />, <AppWorkoutUI key="3" />, <AppProfileUI key="4" />];

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


// ----- LIVE GYM INSIGHTS DASHBOARD COMPONENT -----
const LiveGymInsights = ({ isMobile }) => {
   return (
      <section style={{ background: '#08080A', padding: isMobile ? '6rem 1rem' : '10rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-light)' }}>
         {/* Background Glow */}
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none' }}></div>
         
         <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="ui-text-bold" style={{ color: 'var(--accent-purple)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Live Gym Insights</motion.div>
               <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} style={{ fontSize: isMobile ? '2.5rem' : '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  The Data Core of your <span className="text-gradient">Gym.</span>
               </motion.h2>
               <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                  A powerful, real-time SaaS dashboard that feeds off your members' activity. Track workout trends, vending revenue, and top athletes.
               </motion.p>
            </div>

            {/* Main Application Window */}
            <motion.div 
               initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true, margin: "-100px" }} transition={{ duration: 0.8, type: 'spring', stiffness: 40 }}
               style={{ background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: '0 40px 100px var(--shadow-str, rgba(0,0,0,0.8)), inset 0 2px 20px rgba(255,255,255,0.02)', overflow: 'hidden' }}
            >
               {/* App Header */}
               <div style={{ padding: '1rem 2rem', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                     <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-red)' }}></div>
                     <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-orange)' }}></div>
                     <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                  </div>
                  <div className="ui-text-muted" style={{ fontSize: '0.85rem' }}>analytics.yuguyu.com</div>
                  <div></div>
               </div>

               {/* Dashboard Grid */}
               <div style={{ padding: isMobile ? '1.5rem' : '3rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  
                  {/* CHART 1: LINE GRAPH (Daily Activity) */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="glass-card" style={{ gridColumn: isMobile ? '1' : '1 / span 2', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <div>
                           <div className="ui-text-muted" style={{ marginBottom: '0.5rem' }}>Daily Gym Activity (Live)</div>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>142 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>members active</span></div>
                        </div>
                        <div style={{ color: 'var(--accent-green)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                           +24% <ArrowRight size={16} style={{ transform: 'rotate(-45deg)' }}/>
                        </div>
                     </div>
                     <div style={{ flex: 1, position: 'relative', minHeight: '150px' }}>
                        {/* Animated SVG Line Graph */}
                        <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                           <defs>
                              <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.4" />
                                 <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0" />
                              </linearGradient>
                           </defs>
                           <motion.path 
                              d="M 0 150 L 0 120 C 50 120, 80 40, 150 60 C 220 80, 250 100, 300 70 C 350 40, 400 90, 450 30 L 500 10 L 500 150 Z" 
                              fill="url(#gradientLine)"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once:true }}
                              transition={{ duration: 1, delay: 0.5 }}
                           />
                           <motion.path 
                              d="M 0 120 C 50 120, 80 40, 150 60 C 220 80, 250 100, 300 70 C 350 40, 400 90, 450 30 L 500 10" 
                              fill="none" 
                              stroke="var(--accent-purple)" 
                              strokeWidth="4" 
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once:true }}
                              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                           />
                        </svg>
                     </div>
                  </motion.div>

                  {/* CHART 2: PIE CHART (Nutrition Logging) */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.4 }} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                     <div className="ui-text-muted" style={{ marginBottom: '1.5rem' }}>Diet Tracking Habits</div>
                     <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <svg width="140" height="140" viewBox="0 0 100 100">
                           {/* Base Circle */}
                           <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border-light)" strokeWidth="16" />
                           {/* Highlight Donut */}
                           <motion.circle 
                              cx="50" cy="50" r="40" fill="none" stroke="var(--brand-red)" strokeWidth="16" 
                              strokeDasharray="251.2"
                              initial={{ strokeDashoffset: 251.2 }}
                              whileInView={{ strokeDashoffset: 251.2 * 0.35 }} // 65% fill
                              viewport={{ once:true }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                              strokeLinecap="round"
                              transform="rotate(-90 50 50)"
                           />
                        </svg>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                           <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>65%</div>
                        </div>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--brand-red)' }}></div> Strict Logging</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--border-focus)' }}></div> Casual</div>
                     </div>
                  </motion.div>

                  {/* CHART 3: BAR GRAPH (Workout Categories) */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.5 }} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                     <div className="ui-text-muted" style={{ marginBottom: '1.5rem' }}>Daily Completed Workouts</div>
                     <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '1rem', borderBottom: '1px solid var(--border-focus)' }}>
                        {[
                           { name: 'Strength', val: 80, col: 'var(--accent-purple)' },
                           { name: 'HIIT', val: 45, col: 'var(--accent-orange)' },
                           { name: 'Cardio', val: 60, col: 'var(--accent-green)' }
                        ].map((bar, i) => (
                           <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                              <motion.div 
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${bar.val}%` }}
                                 viewport={{ once:true }}
                                 transition={{ duration: 0.8, delay: 0.8 + (i * 0.2) }}
                                 style={{ width: '24px', background: bar.col, borderRadius: '4px 4px 0 0', position: 'relative' }}
                              >
                                 <div style={{ position: 'absolute', top: '-25px', width: '100%', textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' }}>{bar.val}</div>
                              </motion.div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{bar.name}</div>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  {/* CHART 4: WIDE LEADERBOARD */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.6 }} className="glass-card" style={{ gridColumn: isMobile ? '1' : '1 / span 2', padding: '1.5rem 2rem' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div className="ui-text-muted">Most Active Members (Weekly)</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--brand-red)', cursor: 'pointer' }}>View All</div>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                           { rank: 1, name: "Marcus Torres", workouts: 6, rewards: 2 },
                           { rank: 2, name: "Jessica Chen", workouts: 5, rewards: 3 },
                           { rank: 3, name: "David Kim", workouts: 5, rewards: 1 },
                        ].map((u, i) => (
                           <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 1rem', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                 <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: i === 0 ? 'var(--accent-orange)' : 'var(--border-focus)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>{u.rank}</div>
                                 <strong style={{ fontSize: '0.95rem' }}>{u.name}</strong>
                              </div>
                              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem' }}>
                                 <span style={{ color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>{u.workouts}</strong> Workouts</span>
                                 <span style={{ color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>{u.rewards}</strong> Purchases</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}


// Horizontal Scroll Product Journey Component
const ProductJourney = ({ isMobile }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} style={{ position: 'relative', height: isMobile ? '300vh' : '500vh', background: 'var(--bg-primary)' }}>
      <div style={{ position: 'sticky', top: 0, display: 'flex', height: '100vh', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div style={{ x, display: 'flex', gap: '10vw', padding: '0 10vw' }}>
          
          {/* Scene 1: Scan */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 1:</span> <br/>Scan In.</h2>
               <p style={{ fontSize: '1.25rem' }}>Members enter the gym and seamlessly scan a QR code. Their personalized fitness journey begins the moment they walk through the doors.</p>
             </div>
             <div className="device-frame" style={{ width: isMobile ? '280px' : '360px', height: isMobile ? '500px' : '650px', transform: 'scale(0.9)' }}>
                <AppScannerUI />
             </div>
          </div>

          {/* Scene 2: Track */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1, order: isMobile ? 1 : 2 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 2:</span> <br/>Log & Track.</h2>
               <p style={{ fontSize: '1.25rem' }}>The Yuguyu app acts as their digital coach. Tracking every set, rep, and macro meal plan natively within your gym's walled garden.</p>
             </div>
             <div className="device-frame" style={{ order: isMobile ? 2 : 1, width: isMobile ? '280px' : '360px', height: isMobile ? '450px' : '550px', transform: 'scale(0.95)' }}>
                <AppWorkoutUI />
             </div>
          </div>

          {/* Scene 3: Connect */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 3:</span> <br/>Community.</h2>
               <p style={{ fontSize: '1.25rem' }}>Members engage with leaderboards, challenges, and gym-wide events. A highly engaged member is a member that never churns.</p>
             </div>
             <div className="glass-card" style={{ width: isMobile ? '300px' : '400px', height: isMobile ? '400px' : '500px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <Users size={24} color="var(--accent-red)"/>
                  <span className="ui-text-bold">Live Gym Leaderboard</span>
                </div>
                {[
                  { name: "Alex R.", score: "2,450 pts", rank: 1, color: "var(--accent-red)" },
                  { name: "Sarah J.", score: "2,100 pts", rank: 2, color: "var(--accent-crimson)" },
                  { name: "Mike T.", score: "1,850 pts", rank: 3, color: "rgba(225, 29, 72, 0.5)" },
                  { name: "You", score: "1,420 pts", rank: 4, color: "var(--text-primary)" }
                ].map((u, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '12px', border: `1px solid ${u.color}` }}>
                     <span className="ui-text-bold">{u.rank}. {u.name}</span>
                     <span style={{ color: u.color }}>{u.score}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Scene 4: Subscriptions */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1, order: isMobile ? 1 : 2 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 4:</span> <br/>Manage & Grow.</h2>
               <p style={{ fontSize: '1.25rem' }}>Give members full control over their memberships natively within the app. Automated renewals, seamless upgrades, and reduced admin overhead.</p>
             </div>
             <div className="device-frame" style={{ order: isMobile ? 2 : 1, width: isMobile ? '280px' : '360px', height: isMobile ? '450px' : '550px', transform: 'scale(0.95)' }}>
                <AppProfileUI />
             </div>
          </div>

          {/* Scene 5: Purchase */}
          <div style={{ width: '80vw', maxWidth: '1000px', flexShrink: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1, order: isMobile ? 1 : 2 }}>
               <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}><span className="text-gradient">Step 5:</span> <br/>Refuel.</h2>
               <p style={{ fontSize: '1.25rem' }}>Post-workout, members can conveniently purchase a premium protein shake or snack directly from the smart vendor. Revenue for the gym, instant fuel for the member.</p>
             </div>
             <div className="device-frame" style={{ order: isMobile ? 2 : 1, width: isMobile ? '280px' : '360px', height: isMobile ? '350px' : '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AppVendingUI />
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const LeftWingWidget = () => {
  const [idx, setIdx] = useState(0);
  const items = [
    <div key="1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Activity size={20} color="var(--accent-red)"/>
        <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Active Members Live</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '2.5rem', color: '#fff', lineHeight: '1' }}>142</div>
        <div style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem' }}>↑ +12%</div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
        {[40, 60, 45, 80, 75, 90, 95].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? 'var(--accent-red)' : 'var(--bg-tertiary)', borderRadius: '4px' }}></div>
        ))}
      </div>
    </div>,
    <div key="2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
       <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Users size={20} color="var(--accent-purple)"/>
        <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Current Capacity</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '2.5rem', color: '#fff', lineHeight: '1' }}>65%</div>
        <div className="ui-text-muted" style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem' }}>Full</div>
      </div>
      <div style={{ width: '100%', background: 'var(--bg-tertiary)', height: '6px', borderRadius: '4px', overflow: 'hidden' }}>
         <div style={{ width: '65%', height: '100%', background: 'var(--accent-purple)' }}></div>
      </div>
    </div>,
    <div key="3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', height: '100%', justifyContent: 'space-between' }}>
       <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <TrendingUp size={20} color="var(--accent-green)"/>
        <span className="ui-text-bold" style={{ fontSize: '1rem' }}>Recent Check-ins</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
        <div className="ui-text-bold" style={{ fontSize: '2.5rem', color: '#fff', lineHeight: '1' }}>5</div>
        <div className="ui-text-muted" style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem' }}>in last 10 mins</div>
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
         <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
         <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
      </div>
    </div>
  ];

  useEffect(() => {
    const timer = setInterval(() => setIdx(prev => (prev + 1) % items.length), 3500);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="glass-card" style={{ width: '100%', height: '100%', padding: '1.5rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(225, 29, 72, 0.3)' }}>
      <AnimatePresence mode="wait">
         <motion.div
           key={idx}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.3 }}
           style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', bottom: '1.5rem' }}
         >
           {items[idx]}
         </motion.div>
      </AnimatePresence>
    </div>
  );
};

const RightWingWidget = () => {
  const [idx, setIdx] = useState(0);
  const items = [
    <div key="1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <Trophy size={20} color="var(--brand-red)"/>
      </div>
      <span className="ui-text-bold" style={{ fontSize: '1rem', textAlign: 'center' }}>Challenge Alert</span>
      <span className="ui-text-muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>Yoga Sunrise is Full</span>
    </div>,
    <div key="2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(234, 88, 12, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <Zap size={20} color="var(--accent-orange)"/>
      </div>
      <span className="ui-text-bold" style={{ fontSize: '1rem', textAlign: 'center' }}>New Milestone</span>
      <span className="ui-text-muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>Alex R. hit 2000 pts</span>
    </div>,
    <div key="3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <Smartphone size={20} color="#38bdf8"/>
      </div>
      <span className="ui-text-bold" style={{ fontSize: '1rem', textAlign: 'center' }}>Reward Unlocked</span>
      <span className="ui-text-muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>Profile Badge for Top 10</span>
    </div>
  ];

  useEffect(() => {
    const timer = setInterval(() => setIdx(prev => (prev + 1) % items.length), 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="glass-card" style={{ width: '100%', height: '100%', padding: '1.5rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(225, 29, 72, 0.3)', background: 'linear-gradient(180deg, rgba(225, 29, 72, 0.05), var(--card-shade, rgba(10,10,15,0.4)))' }}>
      <AnimatePresence mode="wait">
         <motion.div
           key={idx}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.3 }}
           style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem' }}
         >
           {items[idx]}
         </motion.div>
      </AnimatePresence>
    </div>
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
    <div ref={containerRef} style={{ marginTop: isMobile ? '3rem' : '6rem', position: 'relative', height: isMobile ? '420px' : '520px', display: 'flex', justifyContent: 'center', maxWidth: '1000px', margin: '6rem auto 0 auto', perspective: '1000px' }}>
      
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
           height: isMobile ? '400px' : '640px', 
           zIndex: 10, 
           position: 'absolute', 
           bottom: isMobile ? '-20px' : '-80px', 
           boxShadow: '0 40px 80px var(--shadow-str, rgba(0,0,0,0.8)), 0 0 0 1px var(--border-focus) inset' 
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
           display: isMobile ? 'none' : 'block'
         }}
      >
        <LeftWingWidget />
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
           height: isMobile ? '160px' : '180px', 
           zIndex: 11, 
           display: isMobile ? 'none' : 'block'
         }}
      >
         <RightWingWidget />
      </motion.div>
    </div>
  );
};


const ContactPage = ({ onClose, isMobile }) => {
  const [formData, setFormData] = useState({ name: '', email: '', gymName: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'var(--bg-primary)', overflowY: 'auto' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at top right, var(--accent-glow-red) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto', padding: isMobile ? '5rem 1.5rem 3rem' : '6rem 2rem 4rem' }}>
        
        <button onClick={onClose} style={{ position: 'absolute', top: isMobile ? '1.5rem' : '2rem', right: isMobile ? '1.5rem' : '2rem', width: '44px', height: '44px', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', fontSize: '1.2rem', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>✕</button>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: '0.75rem', lineHeight: 1.1 }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
            Ready to transform your gym? Fill in your details and our team will reach out within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.1)', border: '2px solid rgba(34, 197, 94, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <CheckCircle2 size={30} color="var(--accent-green)" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Message Sent!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We'll get back to you within 24 hours.</p>
            <button onClick={onClose} className="btn btn-accent" style={{ padding: '0.8rem 2rem' }}>Back to Home</button>
          </motion.div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name *</label>
                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border 0.2s' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Email *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@gym.com" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border 0.2s' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Gym / Business Name</label>
                <input value={formData.gymName} onChange={e => setFormData({...formData, gymName: e.target.value})} placeholder="Elite Fitness" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border 0.2s' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Phone</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border 0.2s' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Message *</label>
              <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your gym and how we can help..." rows={4} style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical', transition: 'border 0.2s' }} />
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-accent" style={{ padding: '1rem', fontSize: '1.05rem', marginTop: '0.5rem', width: '100%' }}>
              Send Message <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </motion.button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>By submitting, you agree to our Privacy Policy.</p>
          </motion.form>
        )}
      </div>
    </motion.div>
  );
};

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isLightMode, setIsLightMode] = useState(false);
  const [showContact, setShowContact] = useState(false);

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
        padding: isMobile ? '0.75rem 1rem' : '0.75rem 2rem', 
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
        
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {[
              { label: 'Features', href: '#features' },
              { label: 'For Gyms', href: '#for-gyms' },
              { label: 'Ecosystem', href: '#ecosystem' }
            ].map((link) => (
              <a key={link.label} href={link.href} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', transition: 'color 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>{link.label}</a>
            ))}
            <a onClick={() => setShowContact(true)} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', transition: 'color 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Contact</a>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              background: 'var(--glass-bg)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--border-light)',
              transition: 'all 0.2s ease'
            }}
          >
            {isLightMode ? <Sun size={16} color="var(--text-primary)"/> : <Moon size={16} color="var(--text-primary)"/>}
          </button>
          {isMobile && (
            <button onClick={() => setShowContact(true)} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)', transition: 'all 0.2s ease' }}>
              <Menu size={16} color="var(--text-primary)"/>
            </button>
          )}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContact(true)} className="btn btn-accent" 
            style={{ padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.5rem', fontSize: isMobile ? '0.8rem' : '0.9rem', boxShadow: '0 0 20px var(--accent-glow-red), 0 0 60px rgba(225, 29, 72, 0.1)' }}
          >
            <Zap size={14} style={{ marginRight: '6px' }}/> Book Demo
          </motion.button>
        </div>
      </nav>

      {/* 1. CINEMATIC HERO */}
      <section className="section flex-center" style={{ minHeight: '100vh', paddingTop: isMobile ? '7rem' : '10rem', paddingBottom: isMobile ? '3rem' : '6rem', position: 'relative', overflow: 'hidden' }}>
        
        {/* Spotlight behind text */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--accent-glow-red) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0, opacity: 0.8 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
             
            {/* Staggered Word Reveal */}
            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1, position: 'relative' }}>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'block', color: 'var(--text-primary)' }}>
                Your Gym. Smarter.
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'block', fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '0.5rem' }}>
                <span className="text-gradient">Connected. Rewarding.</span>
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.4 }}
              style={{ fontSize: '1.25rem', marginBottom: '1.5rem', maxWidth: '750px', margin: '0 auto 1.5rem auto', color: 'var(--text-secondary)', lineHeight: '1.7', letterSpacing: '-0.01em' }}
            >
              With Yuguyu, members scan in, log workouts, track diet, join the gym community, and instantly buy protein or supplements from smart vending machines.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.5 }}
              style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)', lineHeight: '1.7', fontStyle: 'italic', opacity: 0.85 }}
            >
              Meanwhile gym owners get a powerful dashboard to manage members, engagement, and revenue.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-accent" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
              >Bring Yuguyu To Your Gym <ArrowRight size={20} style={{ marginLeft: '10px' }}/>
              </motion.button>
              <button className="btn btn-secondary">View Demo</button>
            </motion.div>
          </div>

          {/* Mouse-Tracked Floating 3D Scene */}
          <HeroScene isMobile={isMobile} />
        </div>
      </section>

      {/* 2. HORIZONTAL SCROLL PRODUCT JOURNEY */}
      <div id="features"></div>
      <ProductJourney isMobile={isMobile} />

      {/* 4. LIVE GYM INSIGHTS DASHBOARD */}
      <LiveGymInsights isMobile={isMobile} />

      {/* 4. GYM OWNER BENEFITS */}
      <div id="for-gyms"></div>
      <section className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(225, 29, 72, 0.3), transparent)' }}></div>
         <div className="container" style={{ position: 'relative', zIndex: 10 }}>
{/* 5.1 GYM OWNER BENEFITS (Replacing Hardware Focus) */}
            <div style={{ padding: isMobile ? '4rem 1.5rem' : '8rem 4rem', background: 'var(--bg-tertiary)', borderRadius: isMobile ? '20px' : '40px', border: '1px solid rgba(147, 51, 234, 0.15)', marginBottom: 0, marginTop: 0 }}>
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
                        <div style={{ padding: '1rem', background: 'rgba(234, 88, 12, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CreditCard size={28} color="var(--accent-orange)" /></div>
                        <div>
                           <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Streamlined Revenue</h4>
                           <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Frictionless native upgrades and simplified billing workflows boost overall revenue conversion.</p>
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
         </div>

            
      </section>

      {/* 5. ECOSYSTEM VISUAL FLOW */}
      <div id="ecosystem"></div>
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', overflow: 'hidden', padding: isMobile ? '5rem 0' : '10rem 0', position: 'relative' }}>
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
               <div style={{ position: 'absolute', bottom: '-40px', fontWeight: 'bold', color: 'var(--text-primary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Yuguyu OS</div>
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
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Core hub for workouts, community, and loyalty.</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', top: '10%', right: '5%', padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 3 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <LayoutDashboard size={20} color="var(--accent-purple)"/>
                  <div className="ui-text-bold">Gym Ledger</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>Total visibility into member retention and revenue.</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="glass-card" style={{ position: isMobile ? 'static' : 'absolute', bottom: 0, padding: '1.5rem', width: isMobile ? '100%' : '240px', order: isMobile ? 4 : 'unset', backdropFilter: 'blur(30px)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Target size={20} color="var(--accent-orange)"/>
                  <div className="ui-text-bold">Automated Growth</div>
               </div>
               <div className="ui-text-muted" style={{ fontSize: '0.8rem' }}>AI-driven retention paths and frictionless member upgrades.</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION SECTION */}
      <section className="section" style={{ background: 'var(--bg-primary)', padding: isMobile ? '4rem 0' : '12rem 0', position: 'relative', overflow: 'hidden' }}>
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

      

      

      {/* CONTACT PAGE OVERLAY */}
      <AnimatePresence>
        {showContact && <ContactPage onClose={() => setShowContact(false)} isMobile={isMobile} />}
      </AnimatePresence>

      {/* 5. FOOTER & GYM OWNER BENEFITS */}
      <footer style={{ padding: '2rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-light)' }}>
         <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-start', gap: '1rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', textAlign: isMobile ? 'center' : 'left' }}>
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

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaRocket, FaVideo, FaSearchDollar, FaCheck } from 'react-icons/fa';

// ==========================================
// CONFIGURATION DATA
// ==========================================
const PRICING_PLANS = [
  {
    id: 1,
    title: "SEO",
    price: "9,999",
    icon: <FaSearchDollar />,
    description: "Dominate search results organically.",
    features: [
      "Upto 10 Keywords",
      "Time Allotted 50 Hours/Month",
      "On Page & Off Page SEO",
      "Link Building & Local SEO",
      "Keyword Ranking Report",
      "Google Analytics Traffic Report",
      "Monthly Reporting"
    ],
    recommended: false,
    accent: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    title: "VIDEOS",
    price: "6,999",
    icon: <FaVideo />,
    description: "Engage your audience with professional shoots.",
    features: [
      "Videos Planning & Management",
      "1 Package Includes 3 Videos",
      "1 Video Upto 3 Minutes",
      "All Video Shoot on Same Day",
      "Social Media Promotion",
      "Video Shoot by DSLR",
      "Royalty-free Music"
    ],
    recommended: true,
    accent: "from-purple-400 to-pink-400"
  },
  {
    id: 3,
    title: "PPC",
    price: "14,999",
    icon: <FaRocket />,
    description: "Instant traffic and high-conversion leads.",
    features: [
      "Ad Budget < INR 50,000/M",
      "100 Keywords Setup",
      "Text & Banner Ads",
      "Landing Page Selection",
      "GEO Targeting Setup",
      "Conversion Code Setup",
      "Keyword Bid Optimization",
      "Monthly Reports"
    ],
    recommended: false,
    accent: "from-orange-400 to-red-400"
  }
];

// ==========================================
// COMPONENT: 3D TILT CARD
// ==========================================
const PricingCard = ({ plan }) => {
  const { title, price, icon, features, recommended, description, accent } = plan;

  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const sheenGradient = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["linear-gradient(115deg, transparent 0%, rgba(255,255,255,0) 100%)", "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.1) 100%)"]
  );

  return (
    <motion.div
      // Reduced max-width from max-w-sm to max-w-[300px]
      className="relative w-full max-w-[300px] mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        // Reduced roundedness slightly
        className={`relative h-full rounded-[1.5rem] p-[2px] transition-shadow duration-500 
          ${recommended ? 'shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)]' : 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.3)]'}
        `}
      >
        {/* --- DYNAMIC BORDER/BACKGROUND --- */}
        <div className={`absolute inset-0 rounded-[1.5rem] w-full h-full -z-10 overflow-hidden`}>
           {recommended ? (
             // Aurora Animation for Recommended
             <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-aurora-spin bg-[conic-gradient(from_0deg,transparent_0deg,#7c3aed_60deg,#db2777_120deg,transparent_180deg,#7c3aed_240deg,#db2777_300deg,transparent_360deg)] opacity-60 blur-xl" />
           ) : (
             // Subtle Gradient for others
             <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
           )}
        </div>

        {/* --- CARD BODY --- */}
        {/* Reduced padding from p-8 to p-6 */}
        <div className="relative h-full bg-[#0b1221]/95 backdrop-blur-xl rounded-[1.4rem] p-6 flex flex-col items-center text-center overflow-hidden">
          
          {/* Sheen Effect overlay */}
          <motion.div 
            style={{ background: sheenGradient }}
            className="absolute inset-0 z-20 pointer-events-none"
          />

          {/* Floating Icon - Reduced Size */}
          <motion.div 
            style={{ transform: "translateZ(30px)" }}
            className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center text-xl shadow-lg bg-gradient-to-br ${accent} text-white`}
          >
            {icon}
          </motion.div>

          {/* Title & Badge */}
          <motion.div style={{ transform: "translateZ(20px)" }}>
            {/* Reduced Title Size */}
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            {recommended && (
              <span className="inline-block px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[9px] font-bold tracking-widest uppercase rounded-full border border-purple-500/30 mb-2">
                Best Value
              </span>
            )}
            {/* Reduced Description Size */}
            <p className="text-gray-400 text-xs h-8 flex items-center justify-center px-2">{description}</p>
          </motion.div>

          {/* Price - Reduced Size */}
          <motion.div 
            style={{ transform: "translateZ(25px)" }}
            className="my-5 relative"
          >
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              <span className="text-xl align-top opacity-50 font-medium mr-1 text-gray-400">Rs.</span>
              {price}
            </span>
            <span className="text-gray-500 text-xs block mt-1">/ month</span>
          </motion.div>

          {/* Features - Compact list */}
          <motion.div 
             style={{ transform: "translateZ(10px)" }}
             className="w-full flex-1 mb-6"
          >
            <ul className="space-y-2 text-left">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs group/item">
                  <div className={`mt-0.5 p-0.5 rounded-full bg-gradient-to-br ${accent} opacity-80 group-hover/item:opacity-100 transition-opacity`}>
                    <FaCheck className="text-[8px] text-white" />
                  </div>
                  <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Button - Reduced Size */}
          <motion.button 
            style={{ transform: "translateZ(20px)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2.5 rounded-lg font-bold text-xs tracking-wide transition-all shadow-lg
              ${recommended 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-500/40' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
              }
            `}
          >
            Choose Plan
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const Pricing = () => {
  return (
    // Reduced Section Padding
    <section className="relative py-16 px-4 bg-[#050a14] overflow-hidden">
      
      {/* --- COSMIC BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving Stars/Dust */}
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-1/4 left-1/4 animate-pulse" style={{boxShadow: "0 0 10px 2px rgba(255,255,255,0.4)"}}></div>
        <div className="absolute w-[3px] h-[3px] bg-blue-300 rounded-full top-3/4 left-1/3 animate-pulse delay-700" style={{boxShadow: "0 0 15px 3px rgba(100,200,255,0.4)"}}></div>
        <div className="absolute w-[2px] h-[2px] bg-purple-300 rounded-full top-1/2 right-1/4 animate-pulse delay-1000" style={{boxShadow: "0 0 10px 2px rgba(200,100,255,0.4)"}}></div>
        
        {/* Large Nebulas - Scaled down slightly */}
        <div className="absolute -top-[10%] left-[20%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[10%] w-[300px] h-[300px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[30%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* Header - Reduced margins and text sizes */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold tracking-widest uppercase text-xs mb-3"
          >
            Transparent Pricing
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight"
          >
            Plans that Scale <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">With Your Vision</span>
          </motion.h3>
        </div>

        {/* Grid - Adjusted gap and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div key={plan.id} className={plan.recommended ? 'md:-mt-4 md:mb-4' : ''}>
               <PricingCard plan={plan} />
            </div>
          ))}
        </div>

      </div>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style>{`
        @keyframes aurora-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-aurora-spin {
          animation: aurora-spin 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
import React, { useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Search, MapPin, Link as LinkIcon, Cloud } from 'lucide-react';
import cloud from "../assets/images/cloud.png"; // ✅ MOVE HERE
// ==========================================
// DATA: SITEMAP LINKS (Extracted from Screenshots)
// ==========================================
const SITEMAP_LINKS = [
 
  
  // Location Based (Indian Sites)
  { title: "Best Digital Marketing Agency in Bijnor", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Agency in Dhampur", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ahinsa Khand 1", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ahinsa Khand 2", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ajanta Colony", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Alaknanda", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Altamount & Peddar Road", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Amrit Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ankur Vihar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ardee City", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Arjun Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Arya Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ashok Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ashok Vihar Phase 1", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ashok Vihar Phase 2", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Ashok Vihar Phase 3", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Avantika", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bhangel", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bhim Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bhondsi", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bhopura", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bhram Puri", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bhuapur", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Brij Vihar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Budh Vihar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Bulandshahr Road", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chakkarpur", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chander Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chhapraula", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chhipiwara", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chipiyana Buzurg", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chiranjiv Vihar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Chittaranjan Park", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in City Centre Mall", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Connaught Place", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Crossings Republik", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Dadri", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Dasna", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Daulatpura", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Daultabad", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Daurala", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Daurli", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Defence Colony", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Delhi", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Devi Nagar", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Devpuri", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Dharmashala", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M1", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M11", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M12", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M13", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M14", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M15", href: "#", category: "Locations" },
  { title: "Best Digital Marketing Company in Manesar Sector M16", href: "#", category: "Locations" }
];

// ==========================================
// COMPONENT: SITEMAP LINK CARD
// ==========================================
const LinkCard = ({ link, index, mouseX, mouseY }) => {
  return (
    <motion.a
      href={link.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02, duration: 0.4 }} // Staggered entrance
      viewport={{ once: true, margin: "50px" }}
      className="group relative flex items-center gap-3 p-4 rounded-xl bg-[#0f172a]/40 border border-white/5 overflow-hidden hover:bg-[#0f172a]/60 transition-colors"
    >
      {/* Dynamic Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Icon based on Category */}
      <div className="relative z-10 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500/80 transition-all duration-300 shrink-0">
        {link.category === 'Locations' ? <MapPin className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
      </div>

      {/* Text */}
      <span className="relative z-10 text-sm text-gray-300 group-hover:text-white font-medium transition-colors line-clamp-1">
        {link.title}
      </span>
    </motion.a>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const SiteMap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter logic
  const filteredLinks = SITEMAP_LINKS.filter(link => 
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mouse position for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#021333] to-[#041e4d] overflow-hidden font-sans pt-24 pb-20">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* --- HEADER & SEARCH --- */}
        <div className="flex flex-col items-center text-center mb-16">
          
            <img src={cloud} alt="Cloud Icon" className="w-16 h-16" />
         
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Sitemap
          </motion.h1>
          
          <p className="text-gray-400 mb-8">
            Navigate through all our pages and locations easily.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full max-w-xl group"
          >
            <input 
              type="text" 
              placeholder="Search for a location or service..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0a162e]/80 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#0f172a] transition-all shadow-lg backdrop-blur-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
          </motion.div>
        </div>

        {/* --- LINKS GRID --- */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          onMouseMove={handleMouseMove}
        >
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link, idx) => (
              <LinkCard 
                key={idx} 
                link={link} 
                index={idx} 
                mouseX={mouseX} 
                mouseY={mouseY} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No links found matching "{searchTerm}"
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default SiteMap;
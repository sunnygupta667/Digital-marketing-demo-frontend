import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Cloud } from 'lucide-react';

import cloud from "../assets/images/cloud.png"; // ✅ MOVE HERE
// ==========================================
// NAVIGATION DATA STRUCTURE
// ==========================================
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '#', 
    // "Services" needs visible overflow for nested flyouts
    type: 'nested', 
    dropdown: [
      {
        name: 'Paid Marketing',
        href: '#',
        dropdown: [
          { name: 'Affiliate Marketing', href: '#' },
          { name: 'App Marketing', href: '#' },
          { name: 'Bing Advertising', href: '#' },
          { name: 'Brand Marketing Services', href: '#' },
          { name: 'Display Advertising & Social Media Advertising', href: '#' },
          { name: 'Email Marketing', href: '#' },
          { name: 'Influencer Marketing', href: '#' },
          { name: 'Mobile Marketing', href: '#' },
          { name: 'PPC Bing', href: '#' },
          { name: 'PPC Google', href: '#' },
          { name: 'Quora Marketing', href: '#' },
          { name: 'Search Engine Marketing & Paid Marketing', href: '#' },
          { name: 'Voice-Over Marketing', href: '#' }
        ]
      },
      {
        name: 'Digital Marketing',
        href: '#',
        dropdown: [
          { name: 'Search Engine Optimization', href: '#' },
          { name: 'Gray Hat SEO', href: '#' },
          { name: 'Black Hat SEO', href: '#' },
          { name: 'What is Blue Hat SEO', href: '#' },
          { name: 'Blue Hat SEO Techniques', href: '#' },
          { name: 'BlueHat SEO', href: '#' }
        ]
      },
      {
        name: 'Social Media Marketing',
        href: '#',
        dropdown: [
          { name: 'Facebook Advertising', href: '#' },
          { name: 'Instagram Marketing', href: '#' },
          { name: 'Linked In Marketing', href: '#' },
          { name: 'Pinterest Marketing', href: '#' },
          { name: 'Social Media Optimization', href: '#' },
          { name: 'Twitter Marketing', href: '#' },
          { name: 'YouTube Paid Marketing', href: '#' }
        ]
      },
      {
        name: 'Web Design & Development',
        href: '#',
        dropdown: [
          { name: 'Website Designing Development', href: '#' },
          { name: 'Mobile App Development', href: '#' },
          { name: 'Logo Designing', href: '#' },
          { name: 'Ecommerce development', href: '#' },
          { name: 'Flyer Design', href: '#' },
          { name: 'Brochure Designing', href: '#' }
        ]
      }
    ] 
  },
  { 
    name: 'PPC Services', 
    href: '#',
    // "PPC" is a long flat list, so it needs scrolling
    type: 'scrollable',
    dropdown: [
      { name: 'Travel PPC Campaign Expert in India', href: '#' },
      { name: 'Travel PPC Campaign Expert in Delhi', href: '#' },
      { name: 'Travel PPC Campaign Expert in Mumbai', href: '#' },
      { name: 'Travel PPC Campaign Expert in Chandigarh', href: '#' },
      { name: 'Travel PPC Campaign Expert in Noida', href: '#' },
      { name: 'Travel PPC Campaign Expert in Ghaziabad', href: '#' },
      { name: 'Pay Per Click Professionals in Delhi', href: '#' },
      { name: 'Pay Per Click Professionals in Digital Marketing', href: '#' },
      { name: 'Best PPC Company in India', href: '#' },
      { name: 'Best PPC Company in Delhi', href: '#' },
      { name: 'Best PPC Company in Noida', href: '#' },
      { name: 'Best PPC Company in Ghaziabad', href: '#' },
      { name: 'Pay Per Click Marketing Agency in Delhi', href: '#' },
      { name: 'Pay Per Click Marketing Agency in Ghaziabad', href: '#' },
      { name: 'Pay Per Click Marketing Agency in Noida', href: '#' },
      { name: 'Pay Per Click Marketing Expert in Delhi', href: '#' },
      { name: 'PPC for Travel Industry', href: '#' },
      { name: 'Pay Per Call Marketing for Travel Industry', href: '#' },
      { name: 'Travel Meta Campaign Expert in India', href: '#' },
      { name: 'Travel Meta Campaign Expert in Delhi', href: '#' },
      { name: 'Travel Meta Campaign Expert in Noida', href: '#' },
      { name: 'Travel Meta Campaign Expert in Ghaziabad', href: '#' },
      { name: 'Travel Meta Campaign Expert in Mumbai', href: '#' },
      { name: 'Travel Meta Campaign Expert in Chandigarh', href: '#' },
      { name: 'Meta Website Campaign Expert in Delhi', href: '#' },
      { name: 'PPC Services for Travel Website in Delhi', href: '#' }
    ]
  },
  { name: 'Training & Internship', href: '/training' },
  { 
    name: 'Locations', 
    href: '#',
    dropdown: [
      { name: 'Best Digital Marketing Institute in Bijnor', href: '#' },
      { name: 'Best Digital Marketing Institute in Dhampur', href: '#' },
      { name: 'Best Digital Marketing Company in Bijnor', href: '#' },
      { name: 'Best Digital Marketing Company in Dhampur', href: '#' },
      { name: 'Best Digital Marketing Agency in Bijnor', href: '#' },
      { name: 'Best Digital Marketing Agency in Dhampur', href: '#' },
      { name: 'Best SEO Agency in Bijnor', href: '#' },
      { name: 'Best SEO Agency in Dhampur', href: '#' }
    ]
  },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95, pointerEvents: 'none' },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    pointerEvents: 'auto',
    transition: { duration: 0.2, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95, 
    pointerEvents: 'none',
    transition: { duration: 0.15, ease: "easeIn" }
  }
};

const subMenuVariants = {
  hidden: { opacity: 0, x: -10, pointerEvents: 'none' },
  visible: { 
    opacity: 1, 
    x: 0, 
    pointerEvents: 'auto',
    transition: { duration: 0.2, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    x: -10, 
    pointerEvents: 'none',
    transition: { duration: 0.15, ease: "easeIn" }
  }
};

// ==========================================
// DESKTOP DROPDOWN ITEM COMPONENT
// ==========================================
const DesktopDropdownItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubmenu = item.dropdown && item.dropdown.length > 0;

  return (
    <div 
      className="relative group/item w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={item.href}
        className="flex items-center justify-between px-4 py-3 text-[13px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors w-full rounded-md"
      >
        <span className="truncate">{item.name}</span>
        {hasSubmenu && <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-white ml-2 flex-shrink-0" />}
      </a>

      {/* NESTED SUBMENU (Flyout to Right) */}
      <AnimatePresence>
        {hasSubmenu && isHovered && (
          <motion.div
            variants={subMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-full top-0 w-72 pl-1 z-50"
          >
            <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden py-2">
              {item.dropdown.map((subItem, idx) => (
                <a 
                  key={idx}
                  href={subItem.href}
                  className="block px-4 py-2.5 text-[13px] text-gray-400 hover:text-white hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-blue-500"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// MOBILE MENU ITEM COMPONENT
// ==========================================
const MobileMenuItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.dropdown && item.dropdown.length > 0;

  return (
    <div className="border-b border-white/5 last:border-0 w-full">
      <div 
        className="flex items-center justify-between py-3 pr-2 w-full"
        style={{ paddingLeft: `${depth * 16}px` }}
        // Toggle if submenu exists, otherwise navigate
        onClick={(e) => {
          if (hasSubmenu) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <a 
          href={item.href} 
          className={`text-base ${depth === 0 ? 'font-medium text-white' : 'text-sm text-gray-300'} flex-1 hover:text-blue-400 transition-colors`}
        >
          {item.name}
        </a>
        {hasSubmenu && (
          <button 
            className="p-2 active:bg-white/10 rounded-full transition-colors focus:outline-none"
          >
            <ChevronDown 
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} 
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && hasSubmenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-[#0a162e]"
          >
            {item.dropdown.map((subItem, idx) => (
              <MobileMenuItem key={idx} item={subItem} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// MAIN NAVBAR COMPONENT
// ==========================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans
        ${scrolled ? 'bg-[#021333]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-5'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-[1440px] flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer z-50">
       <img src={cloud} alt="cloud-logo" className="w-12 h-12" />
      
          <div className="leading-tight">
            <h1 className="text-xl font-extrabold text-white tracking-wide font-sans">HoBo</h1>
            <span className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-bold block -mt-1">e Services</span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-6">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveDesktopMenu(link.name)}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <a 
                href={link.href} 
                className={`flex items-center gap-1 text-[13px] xl:text-sm font-semibold tracking-wide transition-all px-3 py-2 rounded-lg
                  ${activeDesktopMenu === link.name ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}
                `}
              >
                {link.name.toUpperCase()}
                {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDesktopMenu === link.name ? 'rotate-180' : ''}`} />}
              </a>

              {/* LEVEL 1 DROPDOWN */}
              <AnimatePresence>
                {link.dropdown && activeDesktopMenu === link.name && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // IMPORTANT: Conditional styling to fix the issue where flyouts were clipped.
                    // If it's a nested menu (Services), we use visible overflow so submenus can fly out.
                    // If it's a long flat list (PPC), we use hidden overflow with scroll.
                    className={`absolute top-full left-0 pt-4 w-72
                      ${link.type === 'nested' ? 'overflow-visible' : 'overflow-hidden'}
                    `}
                  >
                    {/* Invisible bridge to prevent mouseleave when moving to dropdown */}
                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                    
                    <div 
                      className={`
                        bg-[#0f172a]/95 border border-white/10 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl py-2
                        ${link.type === 'scrollable' ? 'max-h-[70vh] overflow-y-auto custom-scrollbar' : 'overflow-visible'}
                      `}
                    >
                      {link.dropdown.map((item, idx) => (
                        <DesktopDropdownItem key={idx} item={item} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-white/10">
            Get Started
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden text-white p-2 z-50 relative rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#021333] z-40 flex flex-col pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pb-20">
              {NAV_LINKS.map((link, idx) => (
                <MobileMenuItem key={idx} item={link} />
              ))}
              
              <div className="mt-8 mb-8">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom Scrollbar Styles for Dropdowns */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
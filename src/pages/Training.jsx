import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MonitorPlay, 
  Search, 
  MousePointer2, 
  Mail, 
  Share2, 
  ShoppingCart, 
  BarChart2, 
  Smartphone, 
  Globe, 
  PenTool, 
  Video, 
  ShieldCheck, 
  Target, 
  Award,
  Calendar,
  Users,
  Briefcase
} from 'lucide-react';

// ==========================================
// DATA: COURSE MODULES LIST
// ==========================================
const COURSE_MODULES_LIST = [
  "Digital Marketing Fundamentals",
  "Website Planning and Structure",
  "Search Engine Optimization (SEO)",
  "Google Ad words and PPC",
  "YouTube and Video Marketing",
  "E-mail Marketing",
  "Lead Generation",
  "Google AdSense",
  "Remarketing Strategies",
  "Google & Bing Business Listing",
  "LinkedIn and Twitter Marketing",
  "Google Analytics & Webmaster",
  "Facebook Marketing for Business",
  "Affiliate Marketing",
  "e-commerce & Payment Gateway",
  "Google Certification Training"
];

// ==========================================
// DATA: WHY CHOOSE US
// ==========================================
const WHY_CHOOSE_US = [
  { text: "100+ Batches Completed & 500+ Students Trained", icon: <Users /> },
  { text: "More than 90% trained students already settled in career", icon: <Briefcase /> },
  { text: "100% Practical training, no precious time wasted in theories", icon: <MonitorPlay /> },
  { text: "10+ Certifications. Training on Live Projects", icon: <Award /> },
  { text: "3 Months Internship Included", icon: <Calendar /> },
  { text: "We train you for exactly what the industry wants", icon: <Target /> },
  { text: "Experienced and self-motivated trainers (10+ Years Exp)", icon: <CheckCircle2 /> },
  { text: "Very Flexible timings for students and professionals", icon: <Calendar /> },
  { text: "16+ Modules in Advanced Digital Marketing Course", icon: <PenTool /> },
  { text: "Free Tools Worth upto 50 Thousand", icon: <ShoppingCart /> }
];

// ==========================================
// DATA: DETAILED MODULES GRID
// ==========================================
const DETAILED_MODULES = [
  { title: "Digital Marketing Intro", icon: <Globe />, color: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "Website Planning", icon: <MonitorPlay />, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { title: "SEO Optimization", icon: <Search />, color: "text-green-400", bg: "bg-green-500/10" },
  { title: "Pay Per Click", icon: <MousePointer2 />, color: "text-red-400", bg: "bg-red-500/10" },
  { title: "Display Advertising", icon: <Share2 />, color: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Email Marketing", icon: <Mail />, color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { title: "Social Media Marketing", icon: <Share2 />, color: "text-pink-400", bg: "bg-pink-500/10" },
  { title: "Facebook Advertising", icon: <Share2 />, color: "text-blue-500", bg: "bg-blue-600/10" },
  { title: "Affiliate Marketing", icon: <Users />, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Ecommerce Marketing", icon: <ShoppingCart />, color: "text-orange-400", bg: "bg-orange-500/10" },
  { title: "Lead Generation", icon: <Target />, color: "text-rose-400", bg: "bg-rose-500/10" },
  { title: "Content Marketing", icon: <PenTool />, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { title: "Blogging & Adsense", icon: <PenTool />, color: "text-teal-400", bg: "bg-teal-500/10" },
  { title: "Video Marketing", icon: <Video />, color: "text-red-500", bg: "bg-red-600/10" },
  { title: "Reputation Mgmt", icon: <ShieldCheck />, color: "text-amber-400", bg: "bg-amber-500/10" },
  { title: "Mobile Marketing", icon: <Smartphone />, color: "text-lime-400", bg: "bg-lime-500/10" },
  { title: "Web Analytics", icon: <BarChart2 />, color: "text-sky-400", bg: "bg-sky-500/10" },
  { title: "Strategy & Planning", icon: <Target />, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const Training = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#021333] to-[#041e4d] overflow-hidden font-sans text-white">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Training & Internship
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Digital Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Training Program
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Master the art of Digital Marketing with our industry-led training program. Live projects, certifications, and 100% placement assistance.
          </motion.p>
        </div>

        {/* --- COURSE OVERVIEW & PRICING --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-32">
          
          {/* LEFT: PRICING CARD (Replaces the "Join Us" Sticker) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-[#0a162e] ring-1 ring-white/10 rounded-2xl leading-none flex items-top justify-start space-x-6">
                <div className="w-full text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join Us Today</h3>
                  <div className="text-sm text-gray-400 mb-6">Limited Seats Available</div>
                  
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                    Rs. 2999
                  </div>
                  <div className="text-sm text-blue-400 font-semibold mb-8">/ Month</div>

                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transform transition hover:-translate-y-1">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: COURSE MODULES LIST */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
              Course Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {COURSE_MODULES_LIST.map((module, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">{module}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- WHY CHOOSE US SECTION --- */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose HoBo e Services?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f172a]/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-[#0f172a]"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 text-blue-400" })}
                </div>
                <div>
                  <p className="text-gray-200 font-medium leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- DETAILED MODULES GRID --- */}
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Comprehensive Curriculum
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {DETAILED_MODULES.map((mod, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-[#0a162e] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${mod.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(mod.icon, { className: `w-7 h-7 ${mod.color}` })}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {mod.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Training;
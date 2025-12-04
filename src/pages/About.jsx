import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  CheckCircle, 
  Globe, 
  Settings, 
  TrendingUp, 
  Search, 
  MousePointer, 
  Monitor,
  Users,
  Target,
  Lightbulb,
  ArrowRight
} from 'lucide-react';



// ==========================================
// DATA: SPECIALIZATION LIST
// ==========================================
const SPECIALIZATIONS = [
  "Online Paid Marketing",
  "Social Media Marketing",
  "Search Engine Optimization (SEO)",
  "Search Engine Marketing (SEM)",
  "Content Marketing",
  "Pay-Per-Click Advertising (PPC)",
  "Affiliate Marketing",
  "Email Marketing",
  "Radio advertising",
  "TV advertising",
  "Local Online Marketing",
  "Reputation Management",
  "Website Design & Developments",
  "App Developments",
  "Reviews Acquisition",
  "Lead Generation",
  "Calls Generation",
  "Gray Hat SEO Expert"
];

// ==========================================
// DATA: INFO CARDS
// ==========================================
const INFO_CARDS = [
  {
    title: "Welcome To Hobo E Services",
    description: "We are loomed to brand your products by listening and letting shape of designing procedure with our clients partners step every day.",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "How we work?",
    description: "We are one of the top-most leading SEO Company that promises for magical top ten listings. Moreover, the realistic recommend is with current scenario.",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-cyan-500"
  },
  {
    title: "What we do?",
    description: "We have the power to turn business across the globe. There are more than 85% internet users who have intention in making purchase.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-indigo-500"
  }
];

// ==========================================
// DATA: FEATURE CARDS
// ==========================================
const FEATURES = [
  {
    title: "Search Engine Optimization",
    desc: "In case you are looking for SEO solutions we have one of the enhancing options relevant to SEO services that meet up requirements covering budgets.",
    icon: <Search className="w-10 h-10" />,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "Social Media Optimization",
    desc: "Influence your social media for more devotion, more acknowledgment and more clients! We're a top organization for social media marketing.",
    icon: <TrendingUp className="w-10 h-10" />,
    gradient: "from-pink-400 to-purple-600"
  },
  {
    title: "Pay Per Click",
    desc: "Are you ready for a boom in business with more traffic? If yes, then we are at a lower cost via utilizing entire advertisement channels.",
    icon: <MousePointer className="w-10 h-10" />,
    gradient: "from-amber-400 to-orange-500"
  }
];

// ==========================================
// COMPONENT: MOUSE SPOTLIGHT CARD
// ==========================================
const SpotlightItem = ({ text }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-gray-200 bg-white/50 overflow-hidden rounded-xl px-4 py-3 transition-colors hover:border-blue-400"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex items-center gap-3 relative z-10">
        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
        <span className="text-gray-700 font-medium text-sm">{text}</span>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const AboutUs = () => {

  

  return (
    <div className="font-sans text-gray-900 bg-gray-50 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#021333] overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#021333] to-black opacity-90" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        {/* Moving Light Orb */}
        <motion.div 
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
        />

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-blue-200 text-sm font-medium uppercase tracking-widest"
          >
            <a href="/" className='cursor-pointer' >Home</a>
            <span className="w-1 h-1 bg-blue-500 rounded-full" />
            <span className="text-white">About</span>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN INTRO SECTION --- */}
      <section className="py-20 px-6 container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              HoBo eServices is one of the <span className="text-blue-600">Best Digital Marketing Company</span> in Ghaziabad
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              HoBo e Services is India's largest digital marketing augmentation provider, offering top-notch SEO, SEM, SMO, and PPC solutions. As a division of Energy and Internet of Things, we are headquartered in Delhi NCR, the capital region of India.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a team of 16+ highly skilled professionals specializing in over 100+ digital marketing domains, we have been delivering outstanding results since 2010. Our expertise spans across various industries, including Healthcare, Travel, Tours, Flight Booking, Airlines, Colleges, Coaching Centers, IT Services, FMCG, and Retail.
            </p>
            
            <button className="group flex items-center gap-2 px-6 py-3 bg-[#021333] text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Learn More 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Animated Graphic (Replaces Static Image) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full"
              />
              
              {/* Middle Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-blue-100 rounded-full"
              />

              {/* Central Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40">
                  <Globe className="text-white w-24 h-24 animate-pulse" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg"
                  >
                    <Settings className="text-gray-600 w-6 h-6" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
                  >
                    <Target className="text-red-500 w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO CARDS SECTION --- */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INFO_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${card.color}`} />
                <div className={`w-14 h-14 rounded-xl ${card.color} bg-opacity-10 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform`}>
                  {/* Since icons are white in design, but color prop is bg, let's adapt */}
                  <div className={`${card.color.replace('bg-', 'text-')} opacity-100`}>
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPECIALIZATION SECTION (Moving Light Grid) --- */}
      <section className="py-20 px-6 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We are specialized in dealing with following services:
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPECIALIZATIONS.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <SpotlightItem text={service} />
              </motion.div>
            ))}
          </div>
          
          <p className="mt-12 text-center text-gray-600 max-w-4xl mx-auto">
            We have immense experience and techniques to advertise over the World Wide Web and bring maximum benefits to your business. All our ideas and strategies will give out beneficially outcome as we are 10+ years old best digital marketing company.
          </p>
        </div>
      </section>

      {/* --- ENHANCE BUSINESS SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">HoBo e Services</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto">
              Enhance Your Business Productivity with HoBo e Services (Best Digital Marketing Agency in Ghaziabad)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-full"
              >
                {/* 3D Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                
                <div className="h-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
                    {feature.desc}
                  </p>
                  <a href="#" className="text-blue-600 font-bold text-sm uppercase tracking-wide hover:underline decoration-2 underline-offset-4">
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
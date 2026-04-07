import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-reserve-btn"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-gold text-black p-4 rounded-full shadow-lg hover:bg-white transition-colors duration-300 flex items-center justify-center animate-pulse-gold lg:hidden"
    >
      <Calendar size={24} />
    </motion.a>
  );
};

export default FloatingCTA;

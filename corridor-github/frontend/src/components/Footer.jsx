import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-black border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://customer-assets.emergentagent.com/job_8330d4af-9364-43d2-bb53-2d06a2fe9acc/artifacts/q43s48j8_ss.png"
              alt="Corridor Bar & Kitchen"
              className="h-16 w-auto mb-6"
              style={{ opacity: 1 }}
            />
            <p className="font-body text-zinc-400 text-sm leading-relaxed">
              Kolkata's premier destination for exquisite cocktails, 
              fine dining, and unforgettable nightlife experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-sm text-zinc-400 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9230968100"
                  className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors"
                >
                  <Phone size={18} className="text-gold" />
                  <span className="font-body text-sm">+91 92309 68100</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/corridorbarandkitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors"
                >
                  <Instagram size={18} className="text-gold" />
                  <span className="font-body text-sm">@corridorbarandkitchen</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <span className="font-body text-sm">
                  31, Chowringhee road, park street Kolkata-700016
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg text-gold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-zinc-400">
                <span className="text-white">Mon - Thu:</span> 5:00 PM - 1:00 AM
              </li>
              <li className="font-body text-sm text-zinc-400">
                <span className="text-white">Fri - Sat:</span> 5:00 PM - 2:00 AM
              </li>
              <li className="font-body text-sm text-zinc-400">
                <span className="text-white">Sunday:</span> 4:00 PM - 12:00 AM
              </li>
            </ul>
            
            <a
              href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-reserve-btn"
              className="inline-block mt-6 bg-gold text-black px-6 py-3 font-body text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors"
            >
              Reserve Now
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-zinc-500">
            © {currentYear} Corridor Bar & Kitchen. All rights reserved.
          </p>
          <p className="font-body text-xs text-zinc-500">
            Drink Responsibly. 21+ Only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

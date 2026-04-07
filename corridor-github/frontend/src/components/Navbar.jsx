import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_8330d4af-9364-43d2-bb53-2d06a2fe9acc/artifacts/q43s48j8_ss.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" data-testid="logo-link">
            <motion.img
              src={LOGO_URL}
              alt="Corridor Bar & Kitchen"
              className="h-12 md:h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onLoad={(e) => e.target.classList.add("loaded")}
              style={{ opacity: 1 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                  location.pathname === link.path ? "text-gold" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Socials */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://www.instagram.com/corridorbarandkitchen"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="instagram-link"
              className="text-white/80 hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="tel:9230968100"
              data-testid="phone-link"
              className="text-white/80 hover:text-gold transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reserve-btn-nav"
              className="bg-gold text-black px-6 py-2.5 font-body text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              Reserve
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                    className={`font-heading text-3xl transition-colors ${
                      location.pathname === link.path ? "text-gold" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-4"
              >
                <a
                  href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mobile-reserve-btn"
                  className="bg-gold text-black px-8 py-4 font-body text-center text-sm tracking-[0.2em] uppercase"
                >
                  Reserve a Table
                </a>
                
                <div className="flex items-center justify-center gap-8 mt-4">
                  <a
                    href="https://www.instagram.com/corridorbarandkitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold"
                  >
                    <Instagram size={28} />
                  </a>
                  <a href="tel:9230968100" className="text-gold">
                    <Phone size={28} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

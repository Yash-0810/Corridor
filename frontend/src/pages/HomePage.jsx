import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import MovingGallery from "../components/MovingGallery";
import Footer from "../components/Footer";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_8330d4af-9364-43d2-bb53-2d06a2fe9acc/artifacts/q43s48j8_ss.png";
const HERO_BG = "/assets/IMG_3940.jpg";

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main data-testid="home-page" className="bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={LOGO_URL}
              alt="Corridor Bar & Kitchen"
              className="h-32 md:h-48 lg:h-56 w-auto mx-auto mb-8 drop-shadow-2xl"
              style={{ opacity: 1 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-accent text-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-4 drop-shadow-2xl"
          >
            Bar & Kitchen
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-white text-base md:text-lg max-w-xl mb-12 drop-shadow-xl"
          >
            Where Kolkata's elite unwind. Premium cocktails, exquisite cuisine, 
            and an atmosphere that defines nightlife.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-reserve-btn"
              className="bg-gold text-black px-10 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-lg"
            >
              Reserve a Table
            </a>
            <Link
              to="/menu"
              data-testid="hero-menu-btn"
              className="border border-gold text-gold px-10 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-300 shadow-lg"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold drop-shadow-md"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      <MovingGallery />

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-4">
              The Corridor Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: Star,
                title: "Premium Selection",
                description:
                  "Curated collection of the finest spirits, wines, and craft cocktails prepared by expert mixologists.",
              },
              {
                icon: Clock,
                title: "Unforgettable Nights",
                description:
                  "Live DJ performances, themed events, and an electric atmosphere every weekend.",
              },
              {
                icon: MapPin,
                title: "Prime Location",
                description:
                  "Located in the heart of Chowringhee, Kolkata's prestigious entertainment district.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 rounded-xl">
                  <feature.icon className="text-gold" size={32} />
                </div>
                <h3 className="font-heading text-xl text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/bn.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
              Join Us Tonight
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
              Ready for an Extraordinary Evening?
            </h2>
            <p className="font-body text-zinc-300 text-lg max-w-2xl mx-auto mb-10">
              Book your table now and experience the finest nightlife Kolkata has to offer.
            </p>
            <a
              href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-reserve-btn"
              className="inline-block bg-gold text-black px-12 py-5 font-body text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-gold/25 hover:scale-105"
            >
              Reserve Your Table
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;

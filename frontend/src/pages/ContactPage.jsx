import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Clock, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <main data-testid="contact-page" className="bg-black min-h-screen pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-white mt-4 mb-6">
            Contact Us
          </h1>
          <p className="font-body text-zinc-400 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, events, or any inquiries.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl text-white mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-body text-sm text-gold uppercase tracking-wider mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:9230968100"
                    data-testid="contact-phone"
                    className="font-body text-xl text-white hover:text-gold transition-colors"
                  >
                    +91 92309 68100
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-body text-sm text-gold uppercase tracking-wider mb-2">
                    Instagram
                  </h3>
                  <a
                    href="https://www.instagram.com/corridorbarandkitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-instagram"
                    className="font-body text-xl text-white hover:text-gold transition-colors"
                  >
                    @corridorbarandkitchen
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-body text-sm text-gold uppercase tracking-wider mb-2">
                    Location
                  </h3>
                  <p className="font-body text-xl text-white leading-relaxed">
                    31, Chowringhee road, park street Kolkata-700016<br />
                    Kolkata, West Bengal<br />
                    India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-body text-sm text-gold uppercase tracking-wider mb-2">
                    Opening Hours
                  </h3>
                  <div className="font-body text-white space-y-1">
                    <p><span className="text-zinc-400">Mon - Thu:</span> 5:00 PM - 1:00 AM</p>
                    <p><span className="text-zinc-400">Fri - Sat:</span> 5:00 PM - 2:00 AM</p>
                    <p><span className="text-zinc-400">Sunday:</span> 4:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reservation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-surface border border-zinc-800 p-8 md:p-12">
              <h2 className="font-heading text-3xl text-white mb-4">Reserve a Table</h2>
              <p className="font-body text-zinc-400 mb-8">
                Book your table through Zomato for a seamless reservation experience. 
                Select your preferred date, time, and party size.
              </p>

              <a
                href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-reserve-btn"
                className="w-full bg-gold text-black px-8 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                Book on Zomato
                <ExternalLink size={18} />
              </a>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h3 className="font-body text-sm text-gold uppercase tracking-wider mb-4">
                  For Private Events
                </h3>
                <p className="font-body text-zinc-400 text-sm mb-4">
                  Planning a corporate event, birthday party, or special celebration? 
                  Contact us directly for customized packages.
                </p>
                <a
                  href="tel:9230968100"
                  className="font-body text-white hover:text-gold transition-colors"
                >
                  Call: +91 92309 68100
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video bg-surface border border-zinc-800 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.673783368758!2d88.3511657!3d22.5538897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779067beb531%3A0x3e41c1fd15a59231!2sCorridor%20Bar%20And%20Kitchen!5e0!3m2!1sen!2sin!4v1774691465667!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Corridor Bar Location"></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

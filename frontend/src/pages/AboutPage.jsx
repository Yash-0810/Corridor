import { motion } from "framer-motion";
import { Award, Users, Music, Utensils } from "lucide-react";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <main data-testid="about-page" className="bg-black min-h-screen pt-24 md:pt-32">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/grp.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mt-4">
              About Corridor
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
                Est. 2020
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-white mt-4 mb-8">
                Where Every Night<br />Becomes a Memory
              </h2>
              <div className="space-y-6 font-body text-zinc-300 leading-relaxed">
                <p>
                  Nestled in the heart of Chowringhee, Corridor Bar & Kitchen emerged 
                  as Kolkata's answer to sophisticated nightlife. What began as a vision 
                  to create an unparalleled social experience has evolved into the city's 
                  most sought-after destination.
                </p>
                <p>
                  Our philosophy is simple: exceptional drinks, outstanding cuisine, 
                  and an atmosphere that transforms ordinary evenings into extraordinary 
                  memories. From our carefully curated cocktail menu to our chef's 
                  innovative creations, every detail is crafted with precision.
                </p>
                <p>
                  Whether you're celebrating a milestone, hosting a corporate event, 
                  or simply seeking an escape from the ordinary, Corridor welcomes you 
                  to experience nightlife as it was meant to be.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/pic.jpg"
                  alt="Corridor Bar Interior"
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
              What Sets Us Apart
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white mt-4">
              The Corridor Difference
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Award-Winning Cocktails",
                description:
                  "Our mixologists craft signature drinks that have earned recognition across the city.",
              },
              {
                icon: Utensils,
                title: "Culinary Excellence",
                description:
                  "From local favorites to global cuisines, our kitchen delivers memorable flavors.",
              },
              {
                icon: Music,
                title: "World-Class Entertainment",
                description:
                  "Live DJs, themed nights, and performances that keep the energy electric.",
              },
              {
                icon: Users,
                title: "Exclusive Events",
                description:
                  "Private parties, corporate gatherings, and celebrations tailored to perfection.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-zinc-800 hover:border-gold/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center">
                  <feature.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-xl text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Signature Cocktails" },
              { number: "5+", label: "Years of Excellence" },
              { number: "1000+", label: "Events Hosted" },
              { number: "∞", label: "Memories Created" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading text-5xl md:text-6xl text-gold mb-2">
                  {stat.number}
                </div>
                <p className="font-body text-sm text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/dj.jpg')",
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
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Experience the Corridor
            </h2>
            <p className="font-body text-zinc-300 text-lg max-w-2xl mx-auto mb-10">
              Join us for an unforgettable evening of fine drinks, exquisite cuisine, 
              and the best nightlife in Kolkata.
            </p>
            <a
              href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-reserve-btn"
              className="inline-block bg-gold text-black px-12 py-5 font-body text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
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

export default AboutPage;

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MovingGallery = () => {
  const images = [
    "/assets/salad.jpg",
    "/assets/sushi.jpg",
    "/assets/pizza.jpg",
    "/assets/beer.jpg",
    "/assets/cocktails.jpg",
    "/assets/whiskey.jpg",
    "/assets/dessert.jpg",
    "/assets/starters.jpg",
    "/assets/fries_nachos.jpg",
    "/assets/oriental_starters.jpg",
    "/assets/main_course.jpg",
    "/assets/salad.jpg"
  ];

  const videos = [
    "/assets/videos/cooking.mp4",
    "/assets/videos/vid2.mp4",
    "/assets/videos/vid3.mp4",
    "/assets/videos/vid5.mp4",
    "/assets/videos/vid6.mp4"
  ];

  return (
    <section className="py-24 bg-black overflow-hidden">
      {/* Corridor Moments Title */}
      <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-8 leading-tight">
          Corridor Moments
        </h2>
      </motion.div>

      {/* Videos Portrait */}
      <motion.div className="mb-16 opacity-100 z-10 p-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Marquee speed={25} gradient={false} pauseOnHover>
          {videos.concat(videos).map((src, i) => (
            <video
              key={i}
              src={src}
              className="mx-2 w-[220px] h-[400px] object-cover rounded-3xl shadow-2xl border-2 border-white/50 opacity-100 block"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          ))}
        </Marquee>
      </motion.div>

      {/* Fascinating Text ABOVE Images */}
      <motion.div className="text-center mb-12 opacity-100 z-10 p-8" initial={{ y: 20 }} whileInView={{ y: 0 }}>
        <h3 className="font-heading text-3xl md:text-4xl text-gold mb-4 leading-tight">
          Where Memories Are Made
        </h3>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
          Captured nights of laughter, luxury, and legendary moments
        </p>
      </motion.div>

      {/* Images LTR */}
      <motion.div className="mb-16 opacity-100 z-10 p-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Marquee speed={45} gradient={false} pauseOnHover>
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              className="mx-2 w-[320px] h-[240px] object-cover rounded-2xl shadow-2xl border-4 border-white/30 opacity-100 block grayscale hover:grayscale-0 hover:scale-105 hover:shadow-white/50 transition-all duration-500"
              loading="eager"
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </Marquee>
      </motion.div>

      {/* Images RTL */}
      <motion.div className="opacity-100 z-10 p-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Marquee speed={45} direction="right" gradient={false} pauseOnHover>
          {images.slice(0, 11).map((src, i) => (
            <motion.img
              key={"r" + i}
              src={src}
              className="mx-2 w-[320px] h-[240px] object-cover rounded-2xl shadow-2xl border-4 border-white/30 opacity-100 block grayscale hover:grayscale-0 hover:scale-105 hover:shadow-white/50 transition-all duration-500"
              loading="eager"
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default MovingGallery;


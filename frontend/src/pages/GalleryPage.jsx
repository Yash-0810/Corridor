import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

const galleryImages = [
  { id: 1, src: "/assets/amb.jpg", alt: "Corridor Ambience", category: "ambience" },
  { id: 2, src: "/assets/apr.jpg", alt: "Aperitif Hour", category: "drinks" },
  { id: 3, src: "/assets/ballent.jpg", alt: "Ballentine Night", category: "drinks" },
  { id: 4, src: "/assets/bl.jpg", alt: "Bar Lounge", category: "ambience" },
  { id: 5, src: "/assets/bn.jpg", alt: "Bar Night", category: "events" },
  { id: 6, src: "/assets/dj.jpg", alt: "DJ Night", category: "events" },
  { id: 7, src: "/assets/cocktails.jpg", alt: "Signature Drinks", category: "drinks" },
  { id: 8, src: "/assets/fries_nachos.jpg", alt: "Gourmet Food", category: "food" },
  { id: 9, src: "/assets/grp.jpg", alt: "Group Party", category: "events" },
  { id: 10, src: "/assets/nod.jpg", alt: "Night Out", category: "ambience" },
  { id: 11, src: "/assets/pic.jpg", alt: "Corridor Vibes", category: "ambience" },
  { id: 12, src: "/assets/pizza.jpg", alt: "Pizza Night", category: "food" },
  { id: 13, src: "/assets/corridor-video.mp4", alt: "Corridor Video Highlights", category: "events", type: "video" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "ambience", label: "Ambience" },
  { id: "drinks", label: "Drinks" },
  { id: "food", label: "Food" },
  { id: "events", label: "Events" },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <main data-testid="gallery-page" className="bg-black min-h-screen pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
            Visual Journey
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-white mt-4 mb-6">
            Gallery
          </h1>
          <p className="font-body text-zinc-400 text-lg max-w-2xl mx-auto">
            Step into the world of Corridor through our curated collection of moments.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              data-testid={`filter-${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 font-body text-sm tracking-[0.15em] uppercase transition-all duration-300 border ${
                selectedCategory === category.id
                  ? "bg-gold text-black border-gold"
                  : "bg-transparent text-white border-zinc-700 hover:border-gold hover:text-gold"
              }`}>
              {category.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                data-testid={`gallery-item-${image.id}`}
                className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
                onClick={() => openLightbox(image, index)}>
                {image.type === 'video' ? (
                  <video
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ opacity: 1 }} />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    style={{ opacity: 1 }} />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                {/* Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold transition-all duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-body text-sm text-white">{image.alt}</p>
                  <span className="font-accent text-xs text-gold uppercase tracking-wider">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}>
            {/* Close Button */}
            <button
              data-testid="lightbox-close"
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}>
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              data-testid="lightbox-prev"
              className="absolute left-4 md:left-8 text-white hover:text-gold transition-colors z-10"
              onClick={prevImage}>
              <ChevronLeft size={48} />
            </button>

            <button
              data-testid="lightbox-next"
              className="absolute right-4 md:right-8 text-white hover:text-gold transition-colors z-10"
              onClick={nextImage}>
              <ChevronRight size={48} />
            </button>

            {/* Media */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}>
              {selectedImage.type === 'video' ? (
                <video
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain"
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{ opacity: 1 }} />
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain"
                  style={{ opacity: 1 }} />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-center">
                <p className="font-body text-white">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default GalleryPage;


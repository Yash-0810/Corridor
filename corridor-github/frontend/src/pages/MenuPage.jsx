import { useState } from "react";
import { motion } from "framer-motion";
import { Salad, UtensilsCrossed, Fish, Flame, Pizza, Soup, IceCream, Beer, Wine, Martini, Wind, Drumstick } from "lucide-react";
import Footer from "../components/Footer";

// Complete Menu Data from Corridor Bar & Kitchen
const menuCategories = [
  {
    id: "salad",
    name: "Salad",
    icon: Salad,
    image: "/assets/menu_images/salad.jpg",
    items: [
      { name: "Classic Caesar Salad", price: "₹429" },
      { name: "Fruit Salad", price: "₹449" },
      { name: "Burrata Arugula Salad", price: "₹850" },
      { name: "Green Salad", price: "₹199" },
    ]
  },
  {
    id: "dimsum",
    name: "Dimsum",
    icon: Soup,
    image: "/assets/menu_images/dimsum.jpg",
    items: [
      { name: "Spinach Corn & Cheese", price: "₹449" },
      { name: "Broccoli Roasted Nut", price: "₹499" },
      { name: "Mushroom & Cheese", price: "₹549" },
      { name: "Cilantro Chicken", price: "₹399" },
      { name: "Thai Herb Fish", price: "₹499" },
      { name: "Cheese Chicken", price: "₹499" },
      { name: "Prawn Hargao", price: "₹499" },
      { name: "Classic Pork", price: "₹549" },
    ]
  },
  {
    id: "sushi",
    name: "Sushi",
    icon: Fish,
    image: "/assets/menu_images/sushi.jpg",
    items: [
      { name: "Shiitake Mushroom Nigiri", price: "₹499" },
      { name: "Veg California Roll", price: "₹549" },
      { name: "Edamame California Roll", price: "₹549" },
      { name: "Avocado Tempura Uramaki", price: "₹549" },
      { name: "Crab Stick Nigiri", price: "₹499" },
      { name: "Prawn Tempura Uramaki", price: "₹599" },
      { name: "Chicken Teriyaki Futomaki", price: "₹599" },
      { name: "Smoked Salmon Maki", price: "₹699" },
    ]
  },
  {
    id: "fries",
    name: "Fries & Nachos",
    icon: Flame,
    image: "/assets/menu_images/fries_nachos.jpg",
    items: [
      { name: "Peri Peri Fries", price: "₹249" },
      { name: "Truffle French Fry", price: "₹399" },
      { name: "Loaded Nachos", price: "₹549 / ₹599" },
    ]
  },
  {
    id: "oriental",
    name: "Oriental Starters",
    icon: UtensilsCrossed,
    image: "/assets/menu_images/oriental_starters.jpg",
    items: [
      { name: "Golden Fried Baby Corn", price: "₹199" },
      { name: "Corn Salt & Pepper", price: "₹249" },
      { name: "Crackling Spinach", price: "₹249" },
      { name: "Crispy Chilli Baby Corn", price: "₹299" },
      { name: "Chilli Lotus Stem", price: "₹299" },
      { name: "Sesame Paneer Sticks", price: "₹299" },
      { name: "Crispy Konjee Vegetable", price: "₹349" },
      { name: "Schezwan Paneer Dry", price: "₹399" },
      { name: "Soya Chilli Mushroom", price: "₹449" },
      { name: "Drums of Heaven", price: "₹349" },
      { name: "Honey Chilli Chicken", price: "₹349" },
      { name: "Cilantro Chilli Chicken", price: "₹349" },
      { name: "Chicken Wings (Cilantro / Schezwan)", price: "₹349" },
      { name: "Tangra Style Chilli Chicken", price: "₹399" },
      { name: "Chicken Yakitori", price: "₹449" },
      { name: "Steamed Fish (Nam Jim)", price: "₹449" },
      { name: "Kung Pao Chicken", price: "₹499" },
      { name: "Golden Fried Prawn", price: "₹499" },
      { name: "Butter Chilli Garlic Prawns", price: "₹499" },
      { name: "Pan Fried Chilli Fish", price: "₹599" },
      { name: "Honey Soya Pork Belly", price: "₹599" },
    ]
  },
  {
    id: "tandoor",
    name: "Tandoor & Indian",
    icon: Drumstick,
    image: "/assets/menu_images/tandoor.jpg",
    items: [
      { name: "Beetroot Tikki", price: "₹199" },
      { name: "Jackfruit Galouti", price: "₹199" },
      { name: "Makai Seekh Kebab", price: "₹299" },
      { name: "Dahi Kebab", price: "₹399" },
      { name: "Kolhapuri Paneer Tikka", price: "₹449" },
      { name: "Mushroom Bharwan", price: "₹499" },
      { name: "Malai Broccoli", price: "₹549" },
      { name: "Kesari Paneer Tikka", price: "₹549" },
      { name: "Tandoori Wings", price: "₹399" },
      { name: "Highway Chicken Tikka", price: "₹449" },
      { name: "Chicken Afghani Tangri", price: "₹599" },
      { name: "Mutton Seekh Kebab", price: "₹749" },
      { name: "Mutton Pepper Fry", price: "₹749" },
      { name: "Ajwain Prawn", price: "₹799" },
      { name: "Gondhoraj Fish Tikka", price: "₹899" },
      { name: "Tandoori Pomfret", price: "₹899" },
      { name: "Sarsonwali Fish Tikka", price: "₹899" },
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: UtensilsCrossed,
    image: "/assets/menu_images/main_course.jpg",
    items: [
      { name: "Penne Bechamel", price: "₹399" },
      { name: "Spaghetti Aglio e Olio", price: "₹449" },
      { name: "Penne Arrabbiata", price: "₹449" },
      { name: "Penne Alla Vodka", price: "₹549" },
      { name: "Spaghetti Carbonara", price: "₹599" },
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: Pizza,
    image: "/assets/menu_images/pizza.jpg",
    items: [
      { name: "Marinara", price: "₹399" },
      { name: "Farmhouse", price: "₹499" },
      { name: "Paneer Tikka Pizza", price: "₹499" },
      { name: "Mushroom Bell Pepper", price: "₹499" },
      { name: "Margherita", price: "₹549" },
      { name: "BBQ Chicken Pizza", price: "₹549" },
      { name: "Smoked Chicken Pizza", price: "₹599" },
      { name: "Pepperoni", price: "₹749" },
      { name: "Funghi Truffle", price: "₹799" },
      { name: "Pesto Burrata", price: "₹1099" },
    ]
  },
  {
    id: "maincourse",
    name: "Main Course & Rice",
    icon: UtensilsCrossed,
    image: "/assets/menu_images/main_course.jpg",
    items: [
      { name: "Fried Rice (Veg/Egg/Chicken/Prawn)", price: "₹199 / ₹249 / ₹289 / ₹299" },
      { name: "Hakka Noodles (Veg/Egg/Chicken/Prawn)", price: "₹199 / ₹249 / ₹289 / ₹299" },
      { name: "Pad Thai (Veg/Egg/Chicken/Prawn)", price: "₹349 / ₹399 / ₹429 / ₹449" },
      { name: "Paneer Butter Masala", price: "₹449" },
      { name: "Kadai Chicken", price: "₹449" },
      { name: "Chicken Do Pyaza", price: "₹449" },
      { name: "Prawn Masala", price: "₹599" },
      { name: "Mutton Kasha", price: "₹799" },
      { name: "Fish Methi Malai", price: "₹799" },
    ]
  },
  {
    id: "breads",
    name: "Breads",
    icon: UtensilsCrossed,
    image: "/assets/menu_images/starters.jpg",
    items: [
      { name: "Tandoori Roti", price: "₹39" },
      { name: "Laccha Paratha", price: "₹49" },
      { name: "Naan (Plain / Butter / Garlic / Cheese)", price: "₹49 / ₹69 / ₹69 / ₹149" },
    ]
  },
  {
    id: "dessert",
    name: "Dessert",
    icon: IceCream,
    image: "/assets/menu_images/dessert.jpg",
    items: [
      { name: "Creme Brulee", price: "₹399" },
      { name: "Lotus Biscoff Cheesecake", price: "₹649" },
      { name: "Tiramisu", price: "₹699" },
    ]
  },
  {
    id: "beer",
    name: "Beer",
    icon: Beer,
    image: "/assets/menu_images/beer.jpg",
    items: [
      { name: "Corona", price: "₹649" },
      { name: "Hoegaarden", price: "₹649" },
      { name: "Budweiser Magnum", price: "₹399" },
      { name: "Heineken", price: "₹349" },
      { name: "Tuborg", price: "₹299" },
      { name: "Kingfisher Premium", price: "₹299" },
    ]
  },
  {
    id: "cocktails",
    name: "Cocktails",
    icon: Martini,
    image: "/assets/menu_images/cocktails.jpg",
    items: [
      { name: "Margarita", price: "₹599" },
      { name: "Mojito", price: "₹449" },
      { name: "Cosmopolitan", price: "₹499" },
      { name: "Old Fashioned", price: "₹549" },
      { name: "Long Island Iced Tea", price: "₹899" },
    ]
  },
  {
    id: "mocktails",
    name: "Mocktails",
    icon: Martini,
    image: "/assets/menu_images/mocktails.jpg",
    items: [
      { name: "All Mocktails", price: "₹249" },
    ]
  },
  {
    id: "whisky",
    name: "Whisky",
    icon: Wine,
    image: "/assets/menu_images/whiskey.jpg",
    items: [
      { name: "Glenfiddich 15 YO", price: "₹899" },
      { name: "Glenlivet 12 YO", price: "₹699" },
      { name: "Johnnie Walker Black Label", price: "₹499" },
      { name: "Chivas Regal 12 YO", price: "₹499" },
    ]
  },
  {
    id: "shisha",
    name: "Shisha",
    icon: Wind,
    image: "/assets/menu_images/shisha.jpg",
    items: [
      { name: "Premium Flavours", price: "₹1499" },
      { name: "Executive Flavours", price: "₹999" },
      { name: "Coal Change", price: "₹199" },
      { name: "Base Upgrade", price: "₹99 / ₹199" },
    ]
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("salad");

  const activeMenuCategory = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <main data-testid="menu-page" className="bg-black min-h-screen pt-24 md:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-accent text-gold text-sm tracking-[0.3em] uppercase">
            Culinary Excellence
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-white mt-4 mb-6">
            Our Menu
          </h1>
          <p className="font-body text-zinc-400 text-lg max-w-2xl mx-auto">
            From handcrafted cocktails to gourmet cuisine, discover flavors that 
            define the Corridor experience.
          </p>
        </motion.div>
      </section>

      {/* Category Navigation */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {menuCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                data-testid={`menu-category-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 md:px-5 py-2 font-body text-xs tracking-[0.1em] uppercase transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-gold text-black border-gold"
                    : "bg-transparent text-white border-zinc-700 hover:border-gold hover:text-gold"
                }`}
              >
                <IconComponent size={14} />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Menu Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Image */}
          <motion.div
            key={`image-${activeCategory}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="aspect-[3/4] overflow-hidden border border-zinc-800 sticky top-32 relative">
              <img
                src={activeMenuCategory?.image}
                alt={activeMenuCategory?.name}
                className="w-full h-full object-cover"
                style={{ opacity: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-3xl text-white">{activeMenuCategory?.name}</h3>
                <p className="font-body text-sm text-gold mt-1">{activeMenuCategory?.items.length} items</p>
              </div>
            </div>
          </motion.div>

          {/* Menu Items */}
          <motion.div
            key={`items-${activeCategory}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-1">
              {activeMenuCategory?.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  data-testid={`menu-item-${index}`}
                  className="group p-5 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-heading text-lg text-white group-hover:text-gold transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <div className="font-heading text-lg text-gold whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-surface py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="font-body text-sm text-zinc-500">
            * Prices inclusive of all taxes. Menu items subject to availability.
            <br />
            For dietary restrictions or allergies, please inform our staff.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Experience Our Menu?
            </h2>
            <a
              href="https://www.zomato.com/kolkata/corridor-bar-kitchen-chowringhee/book"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="menu-reserve-btn"
              className="inline-block bg-gold text-black px-10 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
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

export default MenuPage;

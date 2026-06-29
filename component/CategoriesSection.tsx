// import images to use for categories section in the home page (every image has a the name for it's category)
import World from "@/public/wallpaperflare.com_wallpaper.jpg";
import Breaking from "@/public/breaking.jpg";
import Technology from "@/public/wallpaperflare.com_wallpaper (1).jpg";
import Business from "@/public/wallpaperflare.com_wallpaper (2).jpg";
import Sports from "@/public/wallpaperflare.com_wallpaper (3).jpg";
import Entertainment from "@/public/wallpaperflare.com_wallpaper (4).jpg";
import physics from "@/public/wallpaperflare.com_wallpaper (5).jpg";
import Health from "@/public/wallpaperflare.com_wallpaper (6).jpg";
import Politics from "@/public/wallpaperflare.com_wallpaper (7).jpg";
import Tourism from "@/public/tourism.jpg";
import Food from "@/public/food.jpg";
import Crime from "@/public/crime.jpg";
import Education from "@/public/education.jpg";
import Environment from "@/public/environment.jpg";
import LifyStyle from "@/public/lifestyle.jpg";
import Other from "@/public/other.png";

import Link from "next/link";

// defirne an array of objects every object has name properte to use it for naming and routing using link componet for next
const Categories = [
  { name: "World", img: World.src },
  { name: "Breaking News", img: Breaking.src },
  { name: "Technology", img: Technology.src },
  { name: "Business", img: Business.src },
  { name: "Sports", img: Sports.src },
  { name: "Entertainment", img: Entertainment.src },
  { name: "Science", img: physics.src },
  { name: "Health", img: Health.src },
  { name: "Politics", img: Politics.src },
  { name: "Tourism", img: Tourism.src },
  { name: "Food", img: Food.src },
  { name: "Crime", img: Crime.src },
  { name: "Education", img: Education.src },
  { name: "Environment", img: Environment.src },
  { name: "LifyStyle", img: LifyStyle.src },
  { name: "Other", img: Other.src },
];

export default function CategoriesSection() {
  return (
    <section className="my-10 px-4 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* map in categoires array to render it */}
        {Categories.map((cat) => (
          <Link
            key={cat.name}
            // use the name for linking
            href={`/${cat.name.toLowerCase()}`}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* the imgae of the category */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* the name of the category */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
            <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

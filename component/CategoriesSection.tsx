import World from '@/public/wallpaperflare.com_wallpaper.jpg'
import Technology from '@/public/wallpaperflare.com_wallpaper (1).jpg'
import Business from '@/public/wallpaperflare.com_wallpaper (2).jpg'
import Sports from '@/public/wallpaperflare.com_wallpaper (3).jpg'
import Entertainment from '@/public/wallpaperflare.com_wallpaper (4).jpg'
import physics from '@/public/wallpaperflare.com_wallpaper (5).jpg'
import Health from '@/public/wallpaperflare.com_wallpaper (6).jpg'
import Politics from '@/public/wallpaperflare.com_wallpaper (7).jpg'
const Categories = [
      { name: "World", img: World.src },
      { name: "Technology", img: Technology.src },
      { name: "Business", img: Business.src },
      { name: "Sports", img: Sports.src },
      { name: "Entertainment", img: Entertainment.src },
      { name: "Science", img: physics.src },
      { name: "Health", img: Health.src },
      { name: "Politics", img: Politics.src },
    ]
export default function CategoriesSection() {
  return (
    <section className="my-10 px-4 lg:px-8">
  <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {Categories.map((cat) => (
      <a
        key={cat.name}
        href={`/category/${cat.name.toLowerCase()}`}
        className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
      >
        <img
          src={cat.img}
          alt={cat.name}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
        <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold">
          {cat.name}
        </h3>
      </a>
    ))}
  </div>
</section>
  )
}

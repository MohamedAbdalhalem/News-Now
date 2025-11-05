

export default function TopHeadlinesItem() {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
  <figure className="relative h-70">
    <img 
      src="https://www.infobae.com/resizer/v2/3SQAPNUL6BH7TEOWN33BAF2EKQ.png?auth=ce0e3a72df6c6f2f773d2e11bcf0d34a211ed41de58f21ee4dade4280ee0d938&smart=true&width=1200&height=630&quality=85" 
      alt="Trump, Milei y Machado participan de una cumbre en Miami"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
    <div className="absolute top-3 left-3">
      <span className="badge badge-secondary font-semibold">Trending</span>
    </div>
  </figure>

  <div className="card-body p-4">
    <h2 className="card-title text-md font-semibold line-clamp-2">
      Trump, Milei y Machado participan de una cumbre en Miami para debatir la importancia...
    </h2>
    <p className="text-sm text-gray-500 line-clamp-3 mt-1">
      Los tres líderes políticos serán protagonistas en el America Business Forum, un evento inédito en Estados Unidos...
    </p>
    <div className="card-actions justify-between items-center mt-2">
      <p className="text-xs text-gray-400">
        {new Date("2025-11-05T03:33:00Z").toLocaleDateString()}
      </p>
      <a 
        href="https://www.infobae.com/estados-unidos/2025/11/05/trump-milei-y-machado-participan-de-una-cumbre-en-miami-para-debatir-la-importancia-de-los-liderazgos-personales-en-una-epoca-de-cambios-globales/" 
        target="_blank"
        className="btn btn-sm btn-primary"
      >
        Read More
      </a>
    </div>
  </div>
</div>
    </div>
  )
}



export default function SearchSection() {
  return (
     <section className="w-full bg-base-100 py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
       
        <h2 className="text-3xl font-bold mb-4">Search for News</h2>
        <p className="text-gray-500 mb-8">
          Find the latest articles and top stories by entering your keywords below.
        </p>

        <div className="flex items-center bg-base-200 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-primary transition-all duration-300">
          <input
            type="text"
            placeholder="Search news..."
            className="flex-1 px-6 py-3 bg-transparent outline-none text-base"
          />
          <button className="btn btn-primary rounded-full px-6 py-3">
            <span className="sm:hidden"><i className="fa-solid fa-search"></i></span>
            <span className="hidden sm:inline ml-2">Search</span>
          </button>
        </div>
      </div>
    </section>
  )
}

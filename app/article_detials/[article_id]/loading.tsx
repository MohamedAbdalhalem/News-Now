export default function ArticleDetailsSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-5 pb-5 pt-20 animate-pulse">
      {/* Header */}
      <header>
        <div className="skeleton h-3 w-24 mb-4" />

        <div className="space-y-3 mt-4 max-w-3xl">
          <div className="skeleton h-10 w-full" />
          <div className="skeleton h-10 w-11/12" />
          <div className="skeleton h-10 w-8/12" />
        </div>

        <div className="flex gap-3 mt-6">
          <div className="skeleton h-4 w-24" />
          <div className="skeleton h-4 w-16" />
          <div className="skeleton h-4 w-24" />
          <div className="skeleton h-4 w-20" />
        </div>
      </header>

      {/* Hero */}
      <div className="skeleton mt-7 h-[clamp(200px,44vw,520px)] w-full rounded-xl" />

      <hr className="my-8 border-t border-base-content/10" />

      {/* Progress */}
      <div className="skeleton h-1 w-full mb-8" />

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] lg:grid-cols-[168px_1fr] gap-6 sm:gap-7 lg:gap-12">
        {/* Sidebar */}
        <aside>
          <div className="mb-7">
            <div className="skeleton h-3 w-20 mb-3" />

            <div className="flex flex-wrap gap-2">
              <div className="skeleton h-6 w-16 rounded-full" />
              <div className="skeleton h-6 w-20 rounded-full" />
              <div className="skeleton h-6 w-24 rounded-full" />
              <div className="skeleton h-6 w-16 rounded-full" />
              <div className="skeleton h-6 w-20 rounded-full" />
            </div>
          </div>

          <div>
            <div className="skeleton h-3 w-12 mb-3" />

            <div className="space-y-2">
              <div className="skeleton h-8 w-full rounded-lg" />
              <div className="skeleton h-8 w-full rounded-lg" />
              <div className="skeleton h-8 w-full rounded-lg" />
            </div>
          </div>
        </aside>

        {/* Article */}
        <article>
          {/* Lead paragraph */}
          <div className="space-y-3 mb-8">
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-11/12" />
            <div className="skeleton h-6 w-8/12" />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-10/12" />

            <div className="h-4" />

            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-9/12" />

            {/* Quote */}
            <div className="border-l-2 border-base-content/20 pl-5 my-8">
              <div className="space-y-3">
                <div className="skeleton h-7 w-full" />
                <div className="skeleton h-7 w-10/12" />
                <div className="skeleton h-4 w-28 mt-4" />
              </div>
            </div>

            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-8/12" />
          </div>
        </article>
      </div>
    </div>
  );
}

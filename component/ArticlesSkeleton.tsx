function ArticleCardSkeleton() {
  return (
    <div className="h-full flex flex-col border border-black/10 overflow-hidden">
      {/* Image */}
      <div className="relative h-60">
        <div className="skeleton h-full w-full" />

        {/* Category */}
        <div className="absolute top-4 left-4 skeleton h-5 w-20" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <div className="space-y-2 mb-4">
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-5 w-5/6" />
          <div className="skeleton h-5 w-2/3" />
        </div>

        {/* Description */}
        <div className="space-y-2 mb-6">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <div className="skeleton h-3 w-24" />

          <div className="flex items-center gap-2">
            <div className="skeleton h-4 w-10" />
            <div className="skeleton h-4 w-4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticlesSkeleton() {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-5 mb-8">
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
    </div>
  );
}

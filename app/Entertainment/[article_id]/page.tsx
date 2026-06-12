

export default async function page({
  params,
}: {
  params: Promise<{ article_id: string }>
}) {
  const {article_id : articleId} = await params
  return (
    <div>
      {articleId}
    </div>
  )
}

export type article = {
    article_id: string,
    link:string,
    title: string,
    description: string,
    content: string,
    creator: string[],
    image_url: string | null,
    pubDate: string,
    source_name: string,
    source_url: string,
    source_icon: string,
    language: string,
    country: string[],
    category: string[]
}


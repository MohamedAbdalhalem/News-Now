export async function GET() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3e1df27a4c76b0718c238ed535b66e7f`
    );

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Server Error" }, { status: 500 });
  }
}

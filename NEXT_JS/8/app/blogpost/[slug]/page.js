export default async function Page({ params }) {
  const slug = (await params).slug
  let languages = ["java", "c++", "c", "javascript"]
  if (languages.includes(params.slug)) {
    return <div>My Post: {params.slug}</div>

  }
  else {
    return <div>Page not find </div>
  }
}
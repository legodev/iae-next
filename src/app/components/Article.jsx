export default function Article({ title, text }) {
  return (
    <article className="home__article column">
      <h4 className="home__article-subtitle">{title}</h4>
      <p>{text}</p>
    </article>
  )
}

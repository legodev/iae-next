export default function BreaksColumns({ title1, title2, text1, text2 }) {
  return (
    <section className="breaks__columns">
      <article className="breaks__column">
        <h6 className="column__title">{title1}</h6>
        <p className="column__description">{text1}</p>
      </article>
      <article className="breaks__column">
        <h6 className="column__title">{title2}</h6>
        <p className="column__description">{text2}</p>
      </article>
    </section>
  )
}

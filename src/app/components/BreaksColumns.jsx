import Article from './Article'

export default function BreaksColumns({ title1, title2, text1, text2 }) {
  return (
    <section className="breaks__columns">
      <Article
        cls1={'breaks__column'}
        cls2={'column__title subtitles'}
        cls3={'column__description'}
        title={title1}
        text={text1}
      />
      <Article
        cls1={'breaks__column'}
        cls2={'column__title subtitles'}
        cls3={'column__description'}
        title={title2}
        text={text2}
      />

    </section>
  )
}

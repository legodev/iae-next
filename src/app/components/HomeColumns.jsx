import { Texts } from './Texts.js'
import Article from './Article'

export default function HomeColumns() {
  return (
    <main className="home">
      <article className="space" id="areas"></article>
      <h3 className="home__columns-title">Areas</h3>
      <section className="home__section-columns column">
        <Article
          cls1={'home__article column'}
          cls2={'home__article-subtitle'}
          title="Technological"
          text={Texts.home.technological}
        />
        <Article
          cls1={'home__article column'}
          cls2={'home__article-subtitle'}
          title="Bilingual"
          text={Texts.home.bilingual}
        />
        <Article
          cls1={'home__article column'}
          cls2={'home__article-subtitle'}
          title="Full-time"
          text={Texts.home.fulltime}
        />
      </section>
    </main>
  )
}

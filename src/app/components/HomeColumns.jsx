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
          extra={Texts.home.techextra}
          id={'btn1'}
        />
        <Article
          cls1={'home__article column'}
          cls2={'home__article-subtitle'}
          title="Bilingual"
          text={Texts.home.bilingual}
          extra={Texts.home.bilextra}
          id={'btn2'}
        />
        <Article
          cls1={'home__article column'}
          cls2={'home__article-subtitle'}
          title="Full-time"
          text={Texts.home.fulltime}
          extra={Texts.home.fullextra}
          id={'btn3'}
        />
      </section>
    </main>
  )
}

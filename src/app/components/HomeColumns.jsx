import {Texts} from './Texts.js'
import Article from './Article'


export default function HomeColumns() {
  return (
    <main className="home">
      <article className="space" id="areas"></article>
      <h3 className="home__columns-title">Iae areas</h3>
      <section className="home__section-columns column">
        <Article title="Technological" text={Texts.home.technological} />
        <Article title="Bilingual" text={Texts.home.bilingual} />
        <Article title="Full-time" text={Texts.home.fulltime} />
      </section>
    </main>
  )
}

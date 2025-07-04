import './breaks.css'
import Image from 'next/image'
import ButtonPage from '../components/Button'
import BreaksGrid from '../components/BreaksGrid'
import BreaksGridv2 from '../components/BreaksGridv2'
import { Texts } from '../components/Texts'

export default function ActiveBreaks() {
  return (
    <main className="top">
      <section className="breaks home">
        <article className="breaks__info">
          <h3 className="breaks__title titles">Active breaks</h3>
          <p className="breaks__description">{Texts.active.description}</p>
        </article>
        <figure className="breaks__figure">
          <Image
            className="breaks__img"
            src="/image/img-20.jpeg"
            alt="Image"
            width={800}
            height={800}
          />
        </figure>
      </section>
      <section className="breaks__places home">
        <h5 className="breaks__places-title subtitles">
          Places and activities
        </h5>
        <BreaksGrid />
        <p className="breaks__description">{Texts.active.text2}</p>
        <BreaksGridv2 />
      </section>
      <div className="breaks__links home">
        <ButtonPage href="./interviews">Previous</ButtonPage>
        <ButtonPage href="./ceibal">Next</ButtonPage>
      </div>
    </main>
  )
}

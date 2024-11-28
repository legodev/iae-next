import Image from 'next/image'
import './about.css'
import AboutContainer from '../components/AboutContainer'
import AboutGrid from '../components/AboutGrid'
import ButtonPage from '../components/Button'
import { Texts } from '../components/Texts'

export default function About() {
  return (
    <main className="top">
      <section className="about home">
        <article className="about__column">
          <h3 className="about__title">About</h3>
          <Image
            className="about__image"
            src="/image/img-8.jpeg"
            alt="Image"
            height={800}
            width={800}
          />
        </article>
        <article className="about__column">
          <Image
            className="about__image hidden"
            src="/image/img-9.jpeg"
            alt="Image"
            height={800}
            width={800}
          />
          <p className="about__description">{Texts.about.description}</p>
        </article>
      </section>
      <section className="home__parallax hp3"></section>
      <AboutContainer />
      <section className="about__iaes home">
        <h3 className="about__iaes-title">Title</h3>
        <p>{Texts.about.text5}</p>
        <p>{Texts.about.text6}</p>
      </section>
      <AboutGrid />
      <div className="about__links home">
        <ButtonPage href="./">Previous</ButtonPage>
        <ButtonPage href="./interviews">Next</ButtonPage>
      </div>
    </main>
  )
}

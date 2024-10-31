import Image from 'next/image'
import './about.css'
import AboutContainer from '../components/AboutContainer'

export default function About() {
  return (
    <main className="top">
      <section className="about home">
        <h3 className="about__title">About</h3>
        <Image
          className="about__image"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <Image
          className="about__image hidden"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <p className="about__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          deleniti necessitatibus aliquam itaque cum mollitia, odio illum esse
          quas! Adipisci.
        </p>
      </section>
      <section className="home__parallax hp3"></section>
      <AboutContainer />
      <section className="about">
        <div className="about__grid">
          <Image
            className="about__grid-image g1 hidden"
            src="/image/img-3.jpg"
            alt="Image"
            height={200}
            width={200}
          />
          <Image
            className="about__grid-image g2 hidden"
            src="/image/img-3.jpg"
            alt="Image"
            height={200}
            width={200}
          />
          <Image
            className="about__grid-image g3 hidden"
            src="/image/img-3.jpg"
            alt="Image"
            height={200}
            width={200}
          />
          <Image
            className="about__grid-image g4 hidden"
            src="/image/img-3.jpg"
            alt="Image"
            height={200}
            width={200}
          />
          <Image
            className="about__grid-image g5 hidden"
            src="/image/img-3.jpg"
            alt="Image"
            height={200}
            width={200}
          />
          <Image
            className="about__grid-image g6 hidden"
            src="/image/img-3.jpg"
            alt="Image"
            height={200}
            width={200}
          />
        </div>
      </section>
    </main>
  )
}

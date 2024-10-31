import Image from 'next/image'
import './about.css'
import AboutContainer from '../components/AboutContainer'
import AboutGrid from '../components/AboutGrid'
import ButtonPage from '../components/Button'

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
      <AboutGrid />
      <div className='about__links'>
        <ButtonPage href="./">Previous</ButtonPage>
        <ButtonPage href="./interviews">Next</ButtonPage>
      </div>
    </main>
  )
}

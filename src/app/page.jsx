'use client'

import Link from 'next/link'
import './home.css'
import ButtonPage from './components/Button'
import Grid from './components/Grid'
import Article from './components/Article'
import {Texts} from './components/Texts.js'
import Gridv2 from './components/Gridv2'
import Footer from './components/Footer'

export default function Home() {

  return (
    <div className="top">
      <header className={'home'}>
        <section className="home__section-main column">
          <article className="home__article-main">
            <h1 className="home__title">Title</h1>
            <p className="home__description">{Texts.home.description}</p>
            <Link href="#areas" className="home__button">
              See more
            </Link>
          </article>
          <video
            className="home__video"
            src="/videos/video.mp4"
            autoPlay
            controls
          ></video>
        </section>
      </header>
      <section className="home__parallax"></section>
      <main className="home">
        <article className="space" id="areas"></article>
        <h3 className="home__columns-title">Iae areas</h3>
        <section className="home__section-columns column">
          <Article title="Technological" text={Texts.home.technological} />
          <Article title="Bilingual" text={Texts.home.bilingual} />
          <Article title="Full-time" text={Texts.home.fulltime} />
        </section>
      </main>
      <div></div>
      <section className="home__parallax hp2"></section>
      <div className="home column">
        <Grid />
        <Gridv2 />
        <ButtonPage href='./about'>Next</ButtonPage>
      </div>
      <Footer />
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
    </div>
  )
}

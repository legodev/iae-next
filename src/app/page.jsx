'use client'

import './home.css'
import Link from 'next/link'
import { Texts } from './components/Texts.js'
import HomeColumns from './components/HomeColumns'
import Grid from './components/Grid'
import Gridv2 from './components/Gridv2'
import ButtonPage from './components/Button'

export default function Home() {
  return (
    <div className="top">
      <header className="home">
        <section className="home__section-main column">
          <article className="home__article-main">
            <h1 className="home__title">
              <span className="what">What</span>
              <span className="is">Is</span>
              <span className="iae">IAE?</span>
            </h1>
            <p className="home__description">{Texts.home.description}</p>

            <Link href="#what" className="home__button">
              See more
            </Link>
          </article>
          <video
            className="home__video"
            src="/videos/home.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div id="what"></div>
          <div className="home__div-description">
            <h4 className="home__description description-2">
              {Texts.home.description2}
            </h4>
            <p className="home__description">{Texts.home.description3}</p>
          </div>
        </section>
      </header>
      <section>
        <div className="home__div-description2 home">
          <h4 className="home__description description-2">
            {Texts.home.description2}
          </h4>
          <p className="home__description">{Texts.home.description3}</p>
        </div>
      </section>
      <section className="home__parallax"></section>
      <HomeColumns />
      <div></div>
      <section className="home__parallax hp2"></section>
      <div className="home column">
        <Grid />
        <Gridv2 />
        <ButtonPage href="./about">Next</ButtonPage>
      </div>
    </div>
  )
}

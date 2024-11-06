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

            <Link href="#areas" className="home__button">
              See more
            </Link>
          </article>
          <video
            className="home__video"
            src="/videos/video.mp4"
            autoPlay
            muted
            controls
          ></video>
          <div className='home__div-description'>
            <p className="home__description description-2">
              {Texts.home.description2}
            </p>
            <p className="home__description">{Texts.home.description3}</p>
          </div>
        </section>
      </header>
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

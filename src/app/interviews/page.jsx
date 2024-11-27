import Link from 'next/link'
import './interviews.css'
import Testimonials from '../components/Testimonials'
import ButtonPage from '../components/Button'
import { Texts } from '../components/Texts'

export default function Inteviews() {
  return (
    <main className="top">
      <section className="interview home">
        <h3 className="interview__title">
          <span className="interview__title-span">Our</span>
          <span className="interview__title-span">Interviews</span>
        </h3>
        <video
          // POSTER
          className="interview__video"
          src="/videos/video.mp4"
          autoPlay
          muted
        />
      </section>
      <Link className="interview__btn" href="#testimonials">
        <div className="interview__btn-div">↓</div>
      </Link>
      <section className="interview__testimonials home" id="testimonials">
        <h4 className="testimonials__title">Testimonials</h4>
        <section className="testimonials__container">
          <Testimonials
            cls={'start'}
            img="/image/avatar-1.png"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text={Texts.interviews.marcelo}
            text2={Texts.interviews.marcelo2}
          />
          <Testimonials
            cls={'end'}
            img="/image/avatar-2.png"
            order={'order'}
            start={'start'}
            alt="Image"
            witness="Lorena Punciolo"
            audio="/audio/a1.mp3"
            text={Texts.interviews.lorena}
            text2={Texts.interviews.lorena2}
            
          />
          <Testimonials
            cls={'start'}
            img="/image/avatar-3.png"
            alt="Image"
            witness="Mario Straneo"
            audio="/audio/a1.mp3"
            text={Texts.interviews.mario}
            text2={Texts.interviews.mario2}
          />
        </section>
      </section>
      <section className='interview__students home'>
        <h4 className='interview__students-title'>Students</h4>
        <video
          // POSTER
          poster='/image/poster.png'
          className="interview__students-video"
          src="/videos/students.mp4"
          controls
        />
      </section>
      <div className="interview__links home">
        <ButtonPage href="./about">Previous</ButtonPage>
        <ButtonPage href="./breaks">Next</ButtonPage>
      </div>
    </main>
  )
}

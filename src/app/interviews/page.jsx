import Link from 'next/link'
import './interviews.css'
import Testimonials from '../components/Testimonials'
import ButtonPage from '../components/Button'

export default function Inteviews() {
  return (
    <main className="top">
      <section className="interview home">
        <h3 className="interview__title">
          <span className="interview__title-span">Mock</span>
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
            img="/image/hi.jpeg"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            cls={'end'}
            img="/image/hi.jpeg"
            order={'order'}
            start={'start'}
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            cls={'start'}
            img="/image/hi.jpeg"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            cls={'end'}
            img="/image/hi.jpeg"
            order={'order'}
            start={'start'}
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            cls={'start'}
            img="/image/hi.jpeg"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
        </section>
      </section>
      <div className="interview__links home">
        <ButtonPage href="./about">Previous</ButtonPage>
        <ButtonPage href="./breaks">Next</ButtonPage>
      </div>
    </main>
  )
}

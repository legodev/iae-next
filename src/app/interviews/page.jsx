import Link from 'next/link'
import './interviews.css'
import Testimonials from '../components/Testimonials'

export default function Inteviews() {
  return (
    <main className="top">
      <section className="interview">
        <h3 className="interview__title">Mock Interviews</h3>
        <video
          className="interview__video"
          src="/videos/video.mp4"
          autoPlay
          controls
        />
      </section>
      <Link className="interview__btn" href="#testimonials">
        <div className="interview__btn-div">↓</div>
      </Link>
      <section className="interview__testimonials" id="testimonials">
        <h4 className="testimonials__title">Testimonials</h4>
        <section className="testimonials__container">
          <Testimonials
            img="/image/hi.jpeg"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            img="/image/hi.jpeg"
            order={"order"}
            start={"start"}
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            img="/image/hi.jpeg"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            img="/image/hi.jpeg"
            order={"order"}
            start={"start"}
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
          <Testimonials
            img="/image/hi.jpeg"
            alt="Image"
            witness="Marcelo Santos"
            audio="/audio/a1.mp3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti illo vitae iusto voluptates at. Consectetur labore eum itaque voluptatum!"
          />
        </section>
      </section>
    </main>
  )
}

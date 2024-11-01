import Link from 'next/link'
import './interviews.css'
import Image from 'next/image'

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
          <article className="testimonials__article">
            <div className='testimonials__div'>
              <Image
                src="/image/hi.jpeg"
                alt="Image"
                width={150}
                height={100}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              quisquam, ratione qui dicta voluptas nemo eius nesciunt! Excepturi
              dolorum quibusdam est temporibus maxime a obcaecati.
            </p>
          </article>
        </section>
      </section>
    </main>
  )
}

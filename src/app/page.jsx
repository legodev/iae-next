import Link from 'next/link'
import './home.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="top">
      <div className={'home'}>
        <section className="home__section-main column">
          <article className="home__article-main">
            <h1 className="home__title">Title</h1>
            <p className="home__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              impedit quidem sed, delectus laudantium cupiditate ipsa provident,
              rerum illo expedita eos repudiandae nemo eum distinctio pariatur
              natus omnis tempora. Tempore! Provident quae esse repellendus
            </p>
            <Link href="#peru" className="home__button">
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
      </div>
      <section className="home__parallax"></section>
      <div className="home">
          <h3 className='home__columns-title'>Iae areas</h3>
        <section className="home__section-columns column">
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Technological</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Bilingual</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
        </section>
      </div>
      <section className="home__parallax"></section>
      <div className='home'>
        <section className='home__grid'>
          <Image className='grid-1 image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
          <Image className='grid-2 image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
          <Image className='grid-3 image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
          <Image className='grid-4 image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
          <Image className='grid-5 image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
        </section>
        <section className='home__grid-2'>
          <Image className='left image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
          <Image className='center image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
          <Image className='right image' src="/image/hi.jpeg" alt='image' height={100} width={100}/>
        </section>
        <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
          <article className="home__article column">
            <h4 className='home__article-subtitle'>Full-time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              facere iusto molestias rem ut mollitia tenetur saepe ipsa, nam
              sunt!
            </p>
          </article>
      </div>
    </main>
  )
}

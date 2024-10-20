import Link from 'next/link'
import './home.css'



export default function Home() {
  return (
    <main className={'home top'}>
      <section className="home__section-main">
        <article className="home__article-main">
          <h1 className="home__title">Title</h1>
          <p className="home__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            impedit quidem sed, delectus laudantium cupiditate ipsa provident,
            rerum illo expedita eos repudiandae nemo eum distinctio pariatur
            natus omnis tempora. Tempore! Provident quae esse repellendus
          </p>
          <Link href="#peru" className="home__">
            See more
          </Link>
        </article>

  
      </section>
    </main>
  )
}

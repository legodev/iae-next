import Image from 'next/image'

export default function Grid() {
  return (
    <section className="home__grid">
      <figure className="home__figure grid-1">
      <Image
          className="image"
          src="/image/img-1.jpg"
          alt="image"
          height={1080}
          width={1920}
        />
      </figure>
      <figure className="home__figure grid-2">
        <Image
          className="image"
          src="/image/img-2.jpg"
          alt="image"
          height={800}
          width={550}
        />
      </figure>
      <figure className="home__figure grid-3">
        <Image
          className="image"
          src="/image/img-3.jpg"
          alt="image"
          height={972}
          width={1620}
        />
      </figure>
      <figure className="home__figure grid-4">
        <Image
          className="image"
          src="/image/img-4.jpg"
          alt="image"
          height={618}
          width={1050}
        />
      </figure>

      <figure className="home__figure grid-5">

          <Image
          className="image"
          src="/image/img-5.jpg"
          alt="image"
          height={972}
          width={1620}
        />
      </figure>
    </section>
  )
}

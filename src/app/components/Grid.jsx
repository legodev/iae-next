import Image from 'next/image'

export default function Grid() {
  return (
    <section className="home__grid">
      <figure className="home__figure grid-1">
        <Image
          className="image"
          src="/image/hi.jpeg"
          alt="image"
          height={100}
          width={100}
        />
      </figure>
      <figure className="home__figure grid-2">
        <Image
          className="image"
          src="/image/hi.jpeg"
          alt="image"
          height={100}
          width={100}
        />
      </figure>
      <figure className="home__figure grid-3">
        <Image
          className="image"
          src="/image/hi.jpeg"
          alt="image"
          height={100}
          width={100}
        />
      </figure>
      <figure className="home__figure grid-4">
        <Image
          className="image"
          src="/image/hi.jpeg"
          alt="image"
          height={100}
          width={100}
        />
      </figure>

      <figure className="home__figure grid-5">
        <Image
          className="image"
          src="/image/hi.jpeg"
          alt="image"
          height={100}
          width={100}
        />
      </figure>
    </section>
  )
}

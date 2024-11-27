import Image from 'next/image'

export default function AboutGrid() {
  return (
    <section className="about home">
      <div className="about__grid">
        <Image
          className="about__image img-grid"
          src="/image/img-14.jpg"
          alt="Image"
          height={800}
          width={800}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-14.jpg"
          alt="Image"
          height={800}
          width={800}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-16.jpg"
          alt="Image"
          height={800}
          width={800}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-17.jpg"
          alt="Image"
          height={800}
          width={800}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-18.jpg"
          alt="Image"
          height={800}
          width={800}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-19.jpg"
          alt="Image"
          height={800}
          width={800}
        />
      </div>
    </section>
  )
}

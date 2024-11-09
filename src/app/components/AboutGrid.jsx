import Image from 'next/image'

export default function AboutGrid() {
  return (
    <section className="about home">
      <div className="about__grid">
        <Image
          className="about__image img-grid"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
        <Image
          className="about__image img-grid"
          src="/image/img-3.jpg"
          alt="Image"
          height={200}
          width={200}
        />
      </div>
    </section>
  )
}

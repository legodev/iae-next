import Image from 'next/image'

export default function Testimonials({cls, img, alt, witness, audio, text, text2, order, start }) {
  return (
    <article className={`testimonials__article ${cls}`}>
      <div className="testimonials__div">
        <Image
          className={`testimonials__img ${order}`}
          src={img}
          alt={alt}
          width={100}
          height={100}
        />
        <section className="testimonials__witness" id={start}>
          <h5 className='testimonials__name'>{witness}</h5>
          <audio controls className="testimonials__audio">
            <source src={audio} type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </section>
      </div>
      <p>{text}</p>
      <p>{text2}</p>
    </article>
  )
}

import Image from 'next/image'

export default function AboutColumns({ title, description, src, alt }) {
  return (
    <article className="about__columns-container">
      <div className='about__columns-div'>
        <h4 className="about__columns-title">{title}</h4>
        <p className="about__columns-description">{description}</p>
      </div>
      <Image
        className="about__image"
        src={src}
        alt={alt}
        height={800}
        width={800}
      />
    </article>
  )
}

import Image from "next/image"

export default function AboutColumns({title, description, src, alt}) {
  return (
    <article className="about__columns-container">
      <h4 className="about__columns-title">{title}</h4>
      <p className="about__columns-description">
        {description}
      </p>
      <Image
        className="about__image"
        src={src}
        alt="Image"
        height={200}
        width={200}
      />
    </article>
  )
}

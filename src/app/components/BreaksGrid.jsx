import Image from "next/image"

export default function BreaksGrid() {
  return (
    <article className="breaks__grid">
      <Image
        className="breaks__grid-img g1"
        src="/image/img-13.jpeg"
        alt="Image"
        width={800}
        height={800}
      />
      <Image
        className="breaks__grid-img g2"
        src="/image/img-20.jpeg"
        alt="Image"
        width={800}
        height={800}
      />
      <Image
        className="breaks__grid-img g3"
        src="/image/img-2.jpeg"
        alt="Image"
        width={800}
        height={800}
      />
    </article>
  )
}

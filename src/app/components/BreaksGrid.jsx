import Image from "next/image"

export default function BreaksGrid() {
  return (
    <article className="breaks__grid">
      <Image
        className="breaks__grid-img g1"
        src="/image/hola.jpg"
        alt="Image"
        width={100}
        height={100}
      />
      <Image
        className="breaks__grid-img g2"
        src="/image/hola.jpg"
        alt="Image"
        width={100}
        height={100}
      />
      <Image
        className="breaks__grid-img g3"
        src="/image/hola.jpg"
        alt="Image"
        width={100}
        height={100}
      />
    </article>
  )
}

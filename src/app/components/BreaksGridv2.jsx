import Image from "next/image"

export default function BreaksGridv2() {
  return (
    <section className="breaks__grid v2">
      <Image
        className="gridv2__img c1"
        src="/image/hola.jpg"
        alt="Image"
        width={800}
        height={800}
      />
      <Image
        className="gridv2__img c2"
        src="/image/img-23.jpeg"
        alt="Image"
        width={800}
        height={800}
      />
      <Image
        className="gridv2__img c3"
        src="/image/img-22.jpeg"
        alt="Image"
        width={800}
        height={800}
      />
    </section>
  )
}

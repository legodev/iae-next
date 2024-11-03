import Image from "next/image"

export default function BreaksGridv2() {
  return (
    <section className="breaks__grid v2">
      <Image
        className="gridv2__img c1"
        src="/image/hola.jpg"
        alt="Image"
        width={100}
        height={100}
      />
      <Image
        className="gridv2__img c2"
        src="/image/hola.jpg"
        alt="Image"
        width={100}
        height={100}
      />
      <Image
        className="gridv2__img c3"
        src="/image/hola.jpg"
        alt="Image"
        width={100}
        height={100}
      />
    </section>
  )
}

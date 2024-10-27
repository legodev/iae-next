import Image from 'next/image'

export default function About() {
  return (
    <section className="top">
      <h3>This is the about section ❤️</h3>
      <Image
        className="images"
        src="/image/hi.jpeg"
        alt="Imagen"
        width={500}
        height={300}
      />
      <Image
        className="images"
        src="/image/hola.jpg"
        alt="Imagen"
        width={500}
        height={300}
      />
      <Image
        className="images"
        src="/image/img-3.jpg"
        alt="Imagen"
        width={500}
        height={300}
      />
    </section>
  )
}

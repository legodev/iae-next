import Image from 'next/image'

export default function Grid() {
  return (
    <section className="home__grid">
      <Image
        className="grid-1 image"
        src="/image/hi.jpeg"
        alt="image"
        height={100}
        width={100}
      />
      <Image
        className="grid-2 image"
        src="/image/hi.jpeg"
        alt="image"
        height={100}
        width={100}
      />
      <Image
        className="grid-3 image"
        src="/image/hi.jpeg"
        alt="image"
        height={100}
        width={100}
      />
      <Image
        className="grid-4 image"
        src="/image/hi.jpeg"
        alt="image"
        height={100}
        width={100}
      />
      <Image
        className="grid-5 image"
        src="/image/hi.jpeg"
        alt="image"
        height={100}
        width={100}
      />
    </section>
  )
}

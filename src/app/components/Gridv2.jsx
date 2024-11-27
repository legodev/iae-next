import Image from "next/image"

export default function Gridv2 () {
    return (
        <section className="home__grid-2">
          <Image
            className="left image"
            src="/image/img-6.jpg"
            alt="image"
            height={800}
            width={800}
          />
          <Image
            className="center image"
            src="/image/img-7.jpg"
            alt="image"
            height={800}
            width={800}
          />
          <Image
            className="right image"
            src="/image/img-8.jpg"
            alt="image"
            height={800}
            width={800}
          />
        </section>
    )
}
import Image from "next/image"

export default function Gridv2 () {
    return (
        <section className="home__grid-2">
          <Image
            className="left image"
            src="/image/hi.jpeg"
            alt="image"
            height={100}
            width={100}
          />
          <Image
            className="center image"
            src="/image/hi.jpeg"
            alt="image"
            height={100}
            width={100}
          />
          <Image
            className="right image"
            src="/image/hi.jpeg"
            alt="image"
            height={100}
            width={100}
          />
        </section>
    )
}
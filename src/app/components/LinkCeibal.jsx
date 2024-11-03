import Link from 'next/link'
import Image from 'next/image'

export default function LinkCeibal({ href, cls, src, alt }) {
  return (
    <Link className={`ceibal__link1 ${cls}`} href={href}>
      <Image
        className="ceibal__img"
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </Link>
  )
}

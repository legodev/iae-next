import Link from 'next/link'
import Image from 'next/image'

export default function LinkCeibal({
  href,
  cls,
  cls2 = '',
  cls3,
  cls4,
  cls5,
  src,
  src2,
  alt,
}) {
  return (
    <Link
      className={`ceibal__link1 ${cls}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="ceibal__container">
        <Image
          className={`ceibal__img hidden ${cls2} ${cls3}`}
          src={src}
          alt={alt}
          width={1200}
          height={1000}
        />
        <Image
          className={`ceibal__img ${cls4} ${cls5}`}
          src={src2}
          alt={alt}
          width={1200}
          height={1000}
        />
      </div>
    </Link>
  )
}

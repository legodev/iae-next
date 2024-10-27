import Link from 'next/link'

export default function ButtonPage({ children, href }) {
  return (
    <Link className="button" href={href}>
      {children}
    </Link>
  )
}

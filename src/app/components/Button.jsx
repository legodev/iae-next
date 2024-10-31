import Link from 'next/link'
import "./link.css"

export default function ButtonPage({ children, href, className}) {
  return (
    <Link className={`button  ${className}` } href={href}>
      {children}
    </Link>
  )
}

import Link from "next/link"

const links = [
  {
    href: '../',
    name: 'Home',
  },
  {
    href: '../about',
    name: 'About',
  },
  {
    href: '../interviews',
    name: 'Interviews',
  },
  {
    href: '../breaks',
    name: 'Active Breaks',
  },
  {
    href: '../ceibal',
    name: 'Plan ceibal',
  },
]

export default function Navbar() {
  return (<nav>
    <ul>
        {links.map((link) => {
            return (
                <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link></li>
            )
        })}
    </ul>
  </nav>)
}

import Image from 'next/image'
import './footer.css'
import Link from 'next/link'
import Instagram from './Instagram'
import Linkedin from './Linkedin'
import Mail from './Mail'

import Ceibal from './Ceibal'

export default function Footer() {
  const links = [
    {
      icon: <Instagram />,
      href: 'https://www.instagram.com/iae_montevideo/',
    },
    {
      icon: <Linkedin />,
      href: 'https://www.linkedin.com/company/instituto-de-alta-especializaci%C3%B3n-montevideo-dgetp-utu/',
    },
    {
      icon: <Mail />,
      href: 'mailto:iaemontevideo@utu.edu.uy',
    },
    {
      icon: <Ceibal />,
      href: 'https://ceibal.edu.uy/',
    },
  ]

  return (
    <footer className="footer">
      <div className='footer__container'>
        <Link
          className="footer__iae"
          href={'https://iaemontevideo.utu.edu.uy/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          IAE
        </Link>
        <ul className="footer__list">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  {link.icon}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

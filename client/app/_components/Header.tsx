'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: '/', label: 'Home' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/presupuestos', label: 'Presupuestos' },
  { href: '/cobertura', label: 'Cobertura' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className='header'>
      <nav>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            draggable='false'
            className={pathname === href ? 'active' : ''}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className='header'>
      <nav>
        <Link href={'/'}>Nosotros</Link>
        <Link href={'/servicios'}>Servicios</Link>
        <Link href={'/'}>
          <Image src={'/img/icon/Icono.png'} width={110} height={80} alt="Icono página"/>
        </Link>
        <Link href={'/opiniones'}>Opiniones</Link>
        <Link href={'/cobertura'}>Cobertura</Link>
      </nav>
    </header>
  )
}
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className='header'>
      <nav>
        <Link href={'/'} draggable='false'>Nosotros</Link>
        <Link href={'/servicios'} draggable='false'>Servicios</Link>
        <Link href={'/'} draggable='false' className="headerLogo">
          <Image src={'/img/icon/Icono.png'} width={110} height={60} alt="Icono página"/>
        </Link>
        <Link href={'/opiniones'} draggable='false'>Opiniones</Link>
        <Link href={'/cobertura'} draggable='false'>Cobertura</Link>
      </nav>
    </header>
  )
}
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la Tienda Online</h1>
      <Link href="/productos">
        <a>Ver Productos</a>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/productos')
      .then(response => response.json())
      .then(data => setProductos(data));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto._id}>
            <Link href={`/producto/${producto._id}`}>
              <a>{producto.nombre} - ${producto.precio}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

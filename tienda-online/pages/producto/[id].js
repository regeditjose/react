import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Producto() {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/productos/${id}`)
        .then(response => response.json())
        .then(data => setProducto(data));
    }
  }, [id]);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  );
}

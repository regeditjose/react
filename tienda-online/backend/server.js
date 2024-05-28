const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
});

const Producto = mongoose.model('Producto', productoSchema);

app.get('/api/productos', async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

app.get('/api/productos/:id', async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }
  res.json(producto);
});

app.post('/api/productos', async (req, res) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  res.status(201).json(nuevoProducto);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

import mongoose from 'mongoose'

/* Coleccion ProductSchema. */
const ProductSchema = new mongoose.Schema({
   product_name: {
      /* Nombre del producto */
      type: String,
      required: true,
    },
  product_description: {
    /* Descripción del producto */
    type: String,
    required: true,
  },
  product_price: {
    /* Precio del producto */
    type: Number,
    required: true
  },
  email_reference: {
    /* Referencia al email de la cuenta */
    type: String,
    required: true
  },
  status: {
    /* Estado del producto */
    type: Boolean,
  },
})

export default mongoose.models.Producto || mongoose.model('Producto', ProductSchema)
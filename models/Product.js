import mongoose from 'mongoose'

/* Coleccion ProductSchema. */
const ProductSchema = new mongoose.Schema({
  productName: {
    /* Nombre del producto */
    type: String,
    required: true
  },
  productDescription: {
    /* Descripción del producto */
    type: String,
    required: true
  },
  productPrice: {
    /* Precio del producto */
    type: Number,
    required: true
  },
  userId: {
    /* Referencia al _id de la cuenta */
    type: String,
    required: true
  },
  status: {
    /* Estado del producto */
    type: Boolean
  },
  imgUrl: {
    type: String
  }
})

export default mongoose.models.Producto || mongoose.model('Product', ProductSchema)

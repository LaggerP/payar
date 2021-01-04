import mongoose from 'mongoose'

/* Coleccion CobroSchema. */

const CobroSchema = new mongoose.Schema({
  product_description: {
    /* Descripción del producto que se esta cobrando */
    type: String,
    required: [true, 'Ingrese una descripción que haga referencia del producto que se va a cobrar'],
  },
  crypto_coin: {
    /* Criptomoneda a utilizar */
    type: String,
    required: [true, 'Especifique la criptomoneda a utilizar'],
  },
  crypto_address: {
    /* Direccion de la billetera a la que se van a acreditar las criptomonedas tras realizar el cobro del producto */
    type: String,
  },
  product_price: {
    /* Precio del producto que se esta cobrando */
    type: String, // este valor se tiene que pasar a float con parseFloat()
  },
  qr_url: {
    /* Url del codigo qr generado por la api */
    type: String,
  },
  email_reference: {
    /* Referencia al email de la cuenta */
    type: String,
  },
  status: {
    /* Estado de la transacción */
    type: Boolean,
  },
})

export default mongoose.models.Cobro || mongoose.model('Cobro', CobroSchema)
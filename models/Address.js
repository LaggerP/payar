import mongoose from 'mongoose'

/* Coleccion AddresSchema. */

const AddressSchema = new mongoose.Schema({
  crypto_coin: {
    /* Criptomoneda asociada a la direccion */
    type: String,
    required: [true, 'Especifique la criptomoneda a utilizar'],
  },
  crypto_address: {
    /* Direccion de la billetera a la que se van a acreditar las criptomonedas tras realizar el cobro del producto */
    type: String,
  },
  crypto_reference: {
    /* Direccion de la billetera a la que se van a acreditar las criptomonedas tras realizar el cobro del producto */
    type: String,
  },
  user_id: {
    /* Referencia al _id de la cuenta */
    type: String,
  },
  status: {
    /* Determina si la direccion esta activa o no */
    type: Boolean,
  },
})

export default mongoose.models.Address || mongoose.model('Address', AddressSchema)
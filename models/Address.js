import mongoose from 'mongoose'

/* Coleccion AddresSchema. */

const AddressSchema = new mongoose.Schema({
  cryptoCoin: {
    /* Criptomoneda asociada a la direccion */
    type: String,
    required: [true, 'Especifique la criptomoneda a utilizar']
  },
  cryptoAddress: {
    /* Direccion de la billetera a la que se van a acreditar las criptomonedas tras realizar el cobro del producto */
    type: String
  },
  cryptoReference: {
    /* Direccion de la billetera a la que se van a acreditar las criptomonedas tras realizar el cobro del producto */
    type: String
  },
  userId: {
    /* Referencia al _id de la cuenta */
    type: String
  },
  status: {
    /* Determina si la direccion esta activa o no */
    type: Boolean
  }
})

export default mongoose.models.Address || mongoose.model('Address', AddressSchema)

import mongoose from 'mongoose'

/* Coleccion CobroSchema. */

const CobroSchema = new mongoose.Schema({
  productDescription: {
    /* Descripción del producto que se esta cobrando */
    type: String,
    required: [true, 'Ingrese una descripción que haga referencia del producto que se va a cobrar']
  },
  cryptoCoin: {
    /* Criptomoneda a utilizar */
    type: String,
    required: [true, 'Especifique la criptomoneda a utilizar']
  },
  cryptoAddress: {
    /* Direccion de la billetera a la que se van a acreditar las criptomonedas tras realizar el cobro del producto */
    type: String
  },
  productPrice: {
    /* Precio del producto que se esta cobrando */
    type: Number
  },
  qrUrl: {
    /* Url del codigo qr generado por la api */
    type: String
  },
  userId: {
    /* Referencia al _id de la cuenta */
    type: String
  },
  transactionStatus: {
    /* Referencia al estado de la transferencia */
    type: Boolean
  },
  status: {
    /* Estado de la transacción */
    type: Boolean
  }
})

export default mongoose.models.Cobro || mongoose.model('Cobro', CobroSchema)

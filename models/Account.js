import mongoose from 'mongoose'

/* Coleccion AccountSchema. */
const AccountSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Ingrese su nombre']
  },
  lastname: {
    type: String,
    required: [true, 'Ingrese su apellido']
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

export default mongoose.models.Account || mongoose.model('Account', AccountSchema)

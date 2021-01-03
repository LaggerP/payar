import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const AccountSchema = new mongoose.Schema({
  firstname: {

    type: String,
    required: [true, 'Ingrese su nombre'],
  },
  lastname: {
    type: String,
    required: [true, 'Ingrese su apellido'],
  },
  email: {
    type: String,
  },
  password: {
    type: String, // este valor se tiene que encriptar mediante hash
  },
})

export default mongoose.models.Account || mongoose.model('Account', AccountSchema)
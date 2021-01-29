import dbConnect from '../../utils/database'
import Producto from '../../models/Product'
import middlewares from './middlewares/middlewares'

export default middlewares(async function handler(req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const producto = await Producto.create(req.body)
        res.status(201).json({ success: true, data: producto })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}) 

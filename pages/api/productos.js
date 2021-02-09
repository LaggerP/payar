import dbConnect from '../../utils/database'
import Producto from '../../models/Product'
import middlewares from './middlewares/middlewares'

export const config = { // Oculta: API resolved without sending a response for /api/productos, this may result in stalled requests.
  api: {
    externalResolver: true
  }
}

export default middlewares(async function handler (req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET': {
      try {
        const productos = await Producto.find({ userId: req.cookies._id, status: true })
        res.status(200).json({ success: true, data: productos })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    }

    case 'POST': {
      console.log('aca')
      try {
        const producto = await Producto.create(req.body)
        res.status(201).json({ success: true, data: producto })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    }

    case 'DELETE': {
      try {
        const producto = await Producto.findOneAndUpdate({ _id: req.body.idProduct }, { $set: { status: false } })
        res.status(201).json({ success: true, data: producto })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    }

    default: {
      res.status(400).json({ success: false })
      break
    }
  }
})

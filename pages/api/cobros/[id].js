import dbConnect from '../../../utils/database'
import Cobro from '../../../models/Cobro'
import middlewares from '../middlewares/middlewares'

export const config = { api: { externalResolver: true } }

// Obtengo todos los cobros realizados por un userId
export default middlewares(async function handler (req, res) {
  await dbConnect()
  try {
    const cobros = await Cobro.find({ userId: req.query.id })
    res.status(200).json({
      success: true,
      data: cobros
    })
  } catch (error) {
    res.status(400).json({ success: false })
  }
})

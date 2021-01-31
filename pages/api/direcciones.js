import dbConnect from '../../utils/database'
import Address from '../../models/Address'
import middlewares from './middlewares/middlewares'

export default middlewares(async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET': {
      try {
        const walletsAddress = await Address.find({ userId: req.cookies._id })
        res.status(200).json({ success: true, data: walletsAddress })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    }

    case 'POST':
      try {
        const newWalletAddress = await Address.create(req.body)
        console.log(req.body)
        res.status(201).json({ success: true, data: newWalletAddress })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PATCH': {
      try {
        const walletAddress = await Address.create(req.body)
        res.status(201).json({ success: true, data: walletAddress })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    }

    case 'DELETE': {
      try {
        const walletAddress = await Address.deleteOne({ _id: req.body })
        res.status(201).json({ success: true, data: walletAddress })
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

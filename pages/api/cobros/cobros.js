import dbConnect from '../../../utils/database'
import Cobro from '../../../models/Cobro'
import middlewares from '../middlewares/middlewares'

export const config = { api: { externalResolver: true } }

export default middlewares(async function handler (req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'POST': {
      const {
        cryptoCoin,
        cryptoAddress,
        productPrice
      } = req.body
      const qrUri = `https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=${cryptoCoin}:${cryptoAddress}?amount=${productPrice}%26`
      req.body.qrUrl = qrUri
      req.body.transactionStatus = false

      try {
        const cobro = await Cobro.create(req.body)
        res.status(201).json({
          success: true,
          data: cobro
        })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    }

    case 'PATCH': {
      try {
        const cobro = await Cobro.findByIdAndUpdate(req.body, { transactionStatus: true })
        res.status(201).json({
          success: true,
          data: cobro
        })
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

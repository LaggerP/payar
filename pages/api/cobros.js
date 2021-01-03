// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../utils/database'
import Cobro from '../../models/Cobro'


export default async function handler(req, res) {

  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const cobros = await Cobro.find({}) /* find all the data in our database */
        console.log(cobros)
        res.status(200).json({ success: true, data: cobros })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      const { product_description, crypto_coin, crypto_address, product_price } = req.body

      const qrUri = `https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=${crypto_coin}:${crypto_address}?amount=${product_price}%26`;

      req.body.qr_url = qrUri;
      req.body.status = false;

      try {
        const cobro = await Cobro.create(
          req.body
        ) 
        /* create a new model in the database */
        res.status(201).json({ success: true, data: cobro })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

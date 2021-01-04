// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/database'
import Account from '../../../models/Account'

import { hash } from 'bcrypt'


export default async function login(req, res) {
   await dbConnect();

   const _account = await Account.findOne({ email: req.body.email })

   if (!_account) {
      hash(req.body.password, 12, async function (err, hash) {
         if (!err) {
            try {
               req.body.password = hash;
               await Account.create(req.body)
               res.status(201).json({ success: true })
            } catch (error) {
               res.status(400).json({ success: false, mgs: 'Error al crear cuenta' })
            }
         } else {
            res.status(500).json({ msg: 'Algo salió mal' })
         }
      });
   } else {
      res.status(409).json({ msg: 'El usuario ya existe' })
   }
}
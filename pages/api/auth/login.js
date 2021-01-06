import dbConnect from '../../../utils/database'
import Account from '../../../models/Account'

import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

export default async function login(req, res) {
   try {
      await dbConnect();

      const _account = await Account.findOne({ email: req.body.email })
      compare(req.body.password, _account.password, function (err, result) {
         if (!err && result) {
            const person = { sub: _account.name };
            const jwt = sign(person, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.setHeader('Set-Cookie', cookie.serialize('authToken', jwt, {
               httpOnly: true,
               secure: process.env.NODE_ENV != 'development',
               sameSite: 'strict',
               maxAge: 3600,
               path: '/'
            }))
            res.json({ msg: 'Bienvenid@ de nuevo' })
         } else {
            res.status(409).json({ msg: 'Ocurrio un error, revise sus credenciales' })
         }
      })
   } catch (error) {
      res.status(500).send(error)
   }

}
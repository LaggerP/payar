import { verify } from 'jsonwebtoken'

const isAuthenticated = (fn) => async (req, res) => {
  verify(req.cookies.authToken, process.env.JWT_SECRET, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res)
    }
    res.status(401).json({ msg: 'No se encuentra autenticado' })
  })
}

export default isAuthenticated

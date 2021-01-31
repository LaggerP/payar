import { useState, useEffect } from 'react'

export default function CardCryptoInfo (props) {
  const [cryptoInfo, setCryptoInfo] = useState([])

  const getLastestCryptoInfo = async () => {
    const info = await fetch(`https://data.messari.io/api/v1/assets/${props.coin}/metrics`)
    const crypto = await info.json()
    setCryptoInfo(crypto.data)
  }

  useEffect(async () => {
    await getLastestCryptoInfo()
  })

  return (
         <div className="bg-red-400">
         </div>
  )
}

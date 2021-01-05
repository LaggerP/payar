import React, { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'

const CardCryptoInfo = (props) => {
   const [cryptoInfo, setCryptoInfo] = useState([])

   const getLastestCryptoInfo = async () => {
      const info = await fetch(`https://data.messari.io/api/v1/assets/${props.coin}/metrics`)
      const crypto = await info.json()
      setCryptoInfo(crypto.data)
      console.log(cryptoInfo.market_data.price_usd)
    }

   useEffect(async () => {
      await getLastestCryptoInfo()

    })

      return (
         <div className="bg-red-400">
         </div>
      )
   
}

export default CardCryptoInfo
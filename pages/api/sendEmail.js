/* import Cookies from 'js-cookie'
import emailjs from 'emailjs-com' */

export async function newCobroEmail (description, coin, address, price, qrUrl) {
  /* const emailParams = {
    toName: 'Agus', // Cookies.get('firstname'),
    toEmail: 'agus--diaz@hotmail.com', // Cookies.get('email')
    fromName: 'Payar',
    description: description,
    coin: coin,
    address: address,
    price: price,
    qr: qrUrl
  } */
  console.log('ENV:  ', process.env.EMAILJS_USER)
  /* emailjs.send('default_service', 'payarEmail', emailParams, process.env.EMAILJS_USER)
      .then(response => {
         console.log('SUCCESS!', response.status, response.text);
      }, error => {
         console.log('FAILED...', error);
      }); */
}

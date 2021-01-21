import "tailwindcss/tailwind.css";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

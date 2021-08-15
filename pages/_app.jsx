import 'tailwindcss/tailwind.css'
import { AppProvider } from '../contexts/AppContext'

function MyApp ({
  Component,
  pageProps
}) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp

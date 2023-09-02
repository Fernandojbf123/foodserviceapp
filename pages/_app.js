import '../styles/globals.css'
import { FoodProvider } from '../context/FoodProvider'
function MyApp({ Component, pageProps }) {
  return (
    <FoodProvider>
      <Component {...pageProps} />
    </FoodProvider>
  )
}

export default MyApp

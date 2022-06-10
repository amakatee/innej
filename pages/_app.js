import '../styles/globals.scss'
import {TransContext} from '../context/TransContext'

function MyApp({ Component, pageProps }) {
  return <TransContext>
   <Component {...pageProps} />
   </TransContext>
}

export default MyApp

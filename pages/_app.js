import '../styles/globals.scss'
import {TransContext} from '../context/TransContext'
import { StateContext } from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  return <TransContext>
    <StateContext>
   <Component {...pageProps} />
   </StateContext>
   </TransContext>
}

export default MyApp

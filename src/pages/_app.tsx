import { AppProps } from '../../node_modules/next/app'
import '../../styles/globals.scss'
import '../../styles/global.css'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

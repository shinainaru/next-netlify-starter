import '@styles/globals.css'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    <Footer />
  )
}

export default Application

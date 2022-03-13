import '@styles/globals.css'
import App from 'next/app'
import Footer from '@components/Footer'

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

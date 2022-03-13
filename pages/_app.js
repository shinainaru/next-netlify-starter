import '@styles/globals.css'
import App from 'next/app'
import Footer from '@components/Footer'
import Layout from "@components/Layout"

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

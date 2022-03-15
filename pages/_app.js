import '@styles/globals.css'
import App from 'next/app'
import Footer from '@components/Footer'
import Layout from '@components/Layout'
import Head from 'next/head'

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta name="theme-color" content="#374151">
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

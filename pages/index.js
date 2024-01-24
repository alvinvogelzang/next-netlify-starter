import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kwiwi.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kwiwi.io" />
        <p className="description">
          A company by A. Vogelzang Holding B.V.
        </p>
      </main>

      <Footer />
    </div>
  )
}

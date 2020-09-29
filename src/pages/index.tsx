import React from 'react'
import Head from 'next/head'

import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Teste teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Salve salve</h1>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </main>
    </div>
  )
}

export default Home

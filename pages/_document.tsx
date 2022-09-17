import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = null

class Document extends NextDocument<Props> {
  render = (): JSX.Element => {
    return (
      <Html>
        <Head>
          <link rel="icon" href="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>NODEWAVE</title>
        <meta name='description' content='Nodewave' />
      </Head>
      <body className="font-poppins bg-black z-10">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

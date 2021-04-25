import Head from 'next/head'

export default function AppLayout({children}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )

}
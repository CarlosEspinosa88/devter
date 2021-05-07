import Head from 'next/head'
import style, { GlobalStyles } from './styles'

export default function AppLayout ({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx>{style}</style>
      <style jsx global>{GlobalStyles}</style>
    </>
  )
}

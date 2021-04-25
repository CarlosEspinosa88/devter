import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout'

export default function Home() {
  return (
    <AppLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Devter!</a>
        </h1>
        <nav>
          <Link href="/timeline">
            <a>Go to timeline</a>
          </Link>
        </nav>
      </div>
    </AppLayout>
  )
}

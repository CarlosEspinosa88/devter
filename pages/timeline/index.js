import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import AppLayout from '../../components/AppLayout'

export default function Timeline({ userName }) {
  return (
    <AppLayout >
      <div className={styles.container}>
        <h1 className={styles.title}>
          This is the timeline by {userName}
        </h1>
        <nav>
          <Link href="/">
            <a>Go to home</a>
          </Link>
        </nav>
      </div>
    </AppLayout>
  )
}

// este metodo se esta ejecuntando en el servidor
Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
}
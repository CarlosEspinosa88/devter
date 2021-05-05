import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { colors } from '../styles/theme';

export default function Home() {
  return (
    <AppLayout>
      <section>
          <img src="/fish.svg" width="100" height="100" alt="devter" />
          <h1>Welcome to Devter</h1>
      </section>
      <style jsx>
        {`
          section {
            display: grid;
            height: 100vh;
            place-items: center;
            place-content: center;
          }

          h1 {
            font-size: 25px;
            color: ${colors.black}
          }
        `}
      </style>
    </AppLayout>
  )
}

import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { colors } from '../styles/theme';
import Button from '../components/Button';
import GitHub from '../components/Icon/GitHub'

export default function Home() {
  return (
    <AppLayout>
      <section>
          <img src="/fish.svg" width="100" height="100" alt="devter" />
          <h1>Welcome to Devter</h1>
          <Button>
            <GitHub width='20' height='20' fill={`${colors.white}`} />
            Ingresar
          </Button>
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

import { useState, useEffect } from 'react';
import { colors } from '../styles/theme';
import { addOpacityToColor } from '../styles/utils';
import AppLayout from '../components/AppLayout';
import GitHub from '../components/Icon/GitHub';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import { loginWithGitHub, onAuthStateChanged } from '../firebase/client';

export default function Home() {
  const shadowColor = addOpacityToColor(colors.gray.semiLight, 0.9);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handlerClickLogin = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppLayout>
      <section>
        <img src="/fish.svg" width="100" height="100" alt="devter" />
        <h1>Welcome to Devter {user?.avatar && user?.username}</h1>
        <div>
          {user === null && (
            <Button onClick={handlerClickLogin}>
              <GitHub width={20} height={20} fill={`${colors.white}`} />
              Ingresar
            </Button>
          )}

          {user?.avatar && (
            <div className="card">
              <Avatar width={80} height={80} url={user?.avatar} />
              <div className="info">
                <h3>{user?.username}</h3>
                <p>{user?.email}</p>
              </div>
            </div>
          )}
        </div>
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
            text-align: center;
            color: ${colors.black};
          }

          h3 {
            font-size: 16px;
            margin: 0 0 10px 0;
            color: ${colors.black};
          }

          p {
            font-size: 14px;
            margin: 0 0 10px 0;
            color: ${colors.black};
          }

          .card {
            padding: 20px;
            display: flex;
            place-items: center;
            place-content: center;
            border-radius: 10px;
            background-color: ${colors.gray.light};
            box-shadow: 0px 0px 14px 0px ${shadowColor};
          }

          .info {
            display: flex;
            padding-left: 10px;
            border-radius: 10px;
            flex-direction: column;
          }
        `}
      </style>
    </AppLayout>
  );
}

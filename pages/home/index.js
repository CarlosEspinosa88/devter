import AppLayout from '../../components/AppLayout';
import { breakpoints } from '../../styles/theme';
import Avatar from '../../components/Avatar';

export default function Home() {
  const url = 'https://freepikpsd.com/';
  const urlContent = 'wp-content/uploads/2019/10/';
  const avatar = `${url}${urlContent}avatar-icon-png-50-px-avatar-png-1600_1600.png`;

  return (
    <>
      <AppLayout>
        <header>
          <div className="container-info-header">
            <div className="container-avatar">
              <Avatar height={28} width={28} url={avatar} />
            </div>
            <h2>Header</h2>
          </div>
        </header>
        <section>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
          <p>Hola ckjdjd dsadjad sdoajdoaskajldasdjad dasjdasjdj dij</p>
        </section>
        <nav>
          <div className="container-info-nav">
            <h4>Ico 1</h4>
            <h4>Ico 2</h4>
            <h4>Ico 3</h4>
          </div>
        </nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            top: 0;
            width: 100%;
            height: 49px;
            padding: 10px 15px;
            position: relative;
            border-bottom: 1px solid #c4c4c4;
            background-color: #f1f1f1;
          }

          section {
            height: 90vh;
            max-height: 90vh;
            padding: 0 20px 40px;
            overflow-y: scroll;
          }

          nav {
            bottom: 25px;
            width: 100%;
            height: 49px;
            padding: 10px 15px;
            position: relative;
            border-top: 1px solid #c4c4c4;
            background-color: #f1f1f1;
          }

          h2 {
            font-size: 18px;
            margin: 0;
          }

          h4 {
            font-size: 16px;
            margin: 0;
          }

          .container-avatar {
            margin: 0 10px 0 0;
            display: flex;
          }

          .container-info-header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .container-info-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          @media (min-width: ${breakpoints.mobile}) {
            header {
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
            }
            nav {
              bottom: 20px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
            }

            section {
              height: 80vh;
              max-height: 80vh;
              padding: 0 20px 40px;
              overflow-y: scroll;
            }
          }

          @media (min-width: ${breakpoints.tablet}) {
            nav {
              bottom: 15px;
            }

            section {
              height: 84vh;
              max-height: 84vh;
              padding: 0 20px 40px;
              overflow-y: scroll;
            }
          }
        `}
      </style>
    </>
  );
}

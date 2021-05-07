import { colors } from '../../styles/theme';

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            border: 0;
            color: white;
            display: flex;
            cursor: pointer;
            font-size: 15px;
            padding: 10px 30px;
            align-items: center;
            border-radius: 990px;
            transition: opacity 0.3s ease;
            background-color: ${colors.purpleLight};
          }

          button > :global(svg) {
            margin-right: 10px;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}

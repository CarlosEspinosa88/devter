import { colors, fonts, breakpoints } from '../../styles/theme';
import css from 'styled-jsx/css';

export const GlobalStyles = css.global`
  html, body {
    font-family: ${fonts.base};
    margin: 0
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    height: 100vh;
    width: 100%;
    border-radius: 0px;
    background-color: #f1f1f1
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      border-radius: 10px;
      width: 410px;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    main {
      height: 90vh;
      border-radius: 10px;
      width: 758px;
    }
  }
`

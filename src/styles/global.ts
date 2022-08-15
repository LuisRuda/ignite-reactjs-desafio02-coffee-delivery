import { createGlobalStyle } from 'styled-components'

export const GloblaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    html {
      font-size: 90%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`

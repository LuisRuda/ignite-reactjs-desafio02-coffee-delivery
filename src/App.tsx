import { ThemeProvider } from 'styled-components'

import { GloblaStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>

      <GloblaStyle />
    </ThemeProvider>
  )
}

export default App

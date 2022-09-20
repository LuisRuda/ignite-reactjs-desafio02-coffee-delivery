import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Router } from './Router'
import { GloblaStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CartContextProvider>
      </BrowserRouter>

      <ToastContainer />
      <GloblaStyle />
    </ThemeProvider>
  )
}

export default App

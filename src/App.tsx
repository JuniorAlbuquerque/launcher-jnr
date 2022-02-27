import { Global, ThemeProvider } from '@emotion/react'
import { Fragment } from 'react'
import { globalStyles } from './styles/globalStyles'
import { theme } from './theme'
import Home from './views/Home'

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Fragment>
  )
}

export default App

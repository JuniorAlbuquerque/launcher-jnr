import { Global, ThemeProvider } from '@emotion/react'
import { Fragment } from 'react'
import { globalStyles } from './styles/globalStyles'
import { theme } from './theme'
import { Routes } from './routes'

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Fragment>
  )
}

export default App

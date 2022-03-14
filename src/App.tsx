import { Global, ThemeProvider } from '@emotion/react'
import { Fragment } from 'react'
import { globalStyles } from './styles/globalStyles'
import { theme } from './theme'
import { Routes } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App

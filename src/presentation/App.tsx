import AppProviders from './screens/app-providers'
import { Header } from './components/header/header'
import { Fallback } from './components/error/error-fallback'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/lotr'>
      <AppProviders>
        <Header />

        <div className="max-w-6xl mx-auto">
          <Fallback>
            <AppRoutes />
          </Fallback>
        </div>
      </AppProviders>
    </BrowserRouter>
  )
}

export default App

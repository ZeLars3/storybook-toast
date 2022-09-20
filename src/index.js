import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { toast } from 'services'
import GlobalStyles from 'styles/globalStyles'

const root = ReactDOM.createRoot(
  document.getElementById('root'),
)
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)

reportWebVitals()

export { toast }

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { Context } from './components/components/Context.tsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
    <Context>
    <App />
    </Context>
  </BrowserRouter>
  </Provider>
  
)

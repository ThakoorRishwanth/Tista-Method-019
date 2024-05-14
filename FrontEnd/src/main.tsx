
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Context } from './components/Context.tsx'
// import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
  <Context>
    {/* <ChakraProvider> */}
    <App />
    {/* </ChakraProvider> */}
    </Context>
  </BrowserRouter>
  </Provider>
  
)

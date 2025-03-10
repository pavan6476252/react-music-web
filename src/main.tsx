import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ApiProvider api={api}> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* </ApiProvider> */}
  </React.StrictMode>,
)

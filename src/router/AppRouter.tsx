import { Route, Routes } from 'react-router-dom'
import AppLinktree from '../AppLinktree'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { RegisterPage } from '../auth/pages/RegisterPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={
        <PublicRouter>
          <LoginPage />
        </PublicRouter>
      }/>
      <Route path='/*' element={
        <PrivateRouter>
          <AppLinktree />
        </PrivateRouter>
      }/>
    </Routes>
  )
}

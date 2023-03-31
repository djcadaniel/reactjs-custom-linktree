import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

function AppLinktree() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

export default AppLinktree;
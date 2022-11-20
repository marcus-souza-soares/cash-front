import { useContext } from 'react'
import { AuthContext, AuthContextData } from '../contexts/authContext'

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}

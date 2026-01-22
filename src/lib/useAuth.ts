import { useState } from 'react'
import { useUser } from './UserContext'

export function useAuth() {
  const { user, setUser } = useUser()
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, _password: string) => {
    setIsLoading(true)
    // Simuler une requête API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data
    setUser({
      id: "1",
      name: "Win",
      email: email,
      avatar: "abalo1",
      role: "Admin",
      status: "active"
    })
    
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    // Redirection vers la page de login (à implémenter avec router)
    console.log('User logged out')
  }

  const isAuthenticated = !!user

  return {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated
  }
}

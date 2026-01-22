import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type UserRole = "Admin" | "Comptabilité" | "Manager" | "Employé" | "Client"
export type UserStatus = "active" | "inactive" | "away"

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: UserRole
  status: UserStatus
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  updateUser: (updates: Partial<User>) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: "1",
    name: "Win",
    email: "win@dashboard.com",
    avatar: "abalo1",
    role: "Admin",
    status: "active"
  })

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates })
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

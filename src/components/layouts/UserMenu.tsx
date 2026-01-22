import { User, Settings, LogOut, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useUser } from "@/lib/UserContext"
import UserStatus from "@/components/user/UserStatus"

interface UserMenuProps {
  onSettingsClick: () => void
  onLogoutClick: () => void
}

function UserMenu({ onSettingsClick, onLogoutClick }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { user } = useUser()

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  if (!user) return null

  return (
    <div className="relative" ref={menuRef}>
      {/* User button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
            className="w-full h-full object-contain"
            alt={user.name}
          />
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-slate-800 dark:text-white">
            {user.name}
          </p>
          <UserStatus role={user.role} size="sm" />
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[100]">
          {/* User info */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">
              {user.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {user.email}
            </p>
            <div className="mt-2">
              <UserStatus role={user.role} size="md" />
            </div>
          </div>

          {/* Menu items */}
          <div className="p-2">
            <button
              onClick={() => {
                setIsOpen(false)
                // Navigate to profile (à implémenter avec router)
                console.log('Navigate to profile')
              }}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
            >
              <User className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm text-slate-700 dark:text-slate-300">Mon Profil</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false)
                onSettingsClick()
              }}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
            >
              <Settings className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm text-slate-700 dark:text-slate-300">Paramètres</span>
            </button>
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={() => {
                setIsOpen(false)
                onLogoutClick()
              }}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left"
            >
              <LogOut className="w-4 h-4 text-red-600 dark:text-red-500" />
              <span className="text-sm text-red-600 dark:text-red-500 font-medium">Déconnexion</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu

import { SearchNormal1 } from "iconsax-reactjs"
import { BellDot, Filter, Mail, Menu, Moon, Sun } from "lucide-react"
import { useState } from "react"
import UserMenu from "@/components/layouts/UserMenu"
import LogoutModal from "@/components/modals/LogoutModal"
import { useAuth } from "@/lib/useAuth"

function Header({ onMenuClick, onThemeToggle, onSettingsClick, isDark }: { onMenuClick: () => void, onThemeToggle: () => void, onSettingsClick: () => void, isDark?: boolean }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    setShowLogoutModal(false)
  }

  return (
    <header className='bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-xl border-b border-gray-200 px-6 py-3 relative z-50'>
      <div className='flex items-center justify-between'>
        {/* Left Section */}
        <div className="flex items-center space-x-3 lg:space-x-6">
          <button onClick={onMenuClick} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5"/>
          </button>
          <div className="hidden sm:block px-2 lg:px-4">
            <h1 className="text-xl lg:text-2xl font-black text-slate-800 dark:text-white">
              Tableau de bord
            </h1>
            <p className="hidden md:block text-slate-800 dark:text-white text-sm lg:text-md">Bienvenue, Win! voici le rendu d'aujourd'hui</p>
          </div>
        </div>
        {/* Search bar */}
        <div className='flex-1 max-w-md mr-3 lg:mr-6 hidden md:block'>
          <div className="relative w-full">
            <button className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-900/80 dark:text-slate-100/70 hover:text-slate-900/80 dark:hover:text-slate-100">
              <SearchNormal1 size={18} variant="Linear"/>
            </button>
            <input
              type="text"
              placeholder='Recherche ...'
              className='w-full pl-9 pr-9 py-2 border border-slate-900/80 dark:border-slate-100/90 rounded-full focus:outline-none focus:ring-purple-500 text-slate-900/80 dark:text-slate-100/90 transition-all text-sm'
            />

            {/* Filter */}
            <button className="absolute right-0 p-3 transform-transition-y text-slate-900/80 dark:text-slate-100/70 hover:text-slate-900/80 dark:hover:text-slate-100">
              <Filter className="w-5 h-5"/>
            </button>
          </div>
        </div>

        {/* User actions */}
        <div className='flex items-center space-x-2 lg:space-x-4'>

          {/* Message - Hidden on small screens */}
          <button className='hidden sm:flex p-2 bg-slate-200/80 dark:bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-400 rounded-full'>
            <Mail className="w-5 h-5 dark:hover:text-white hover:text-gray-900"/>
          </button>

          {/* Notifications */}
          <button className='relative p-2 bg-slate-200/80 dark:bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray rounded-full'>
            <BellDot className="w-5 h-5 dark:hover:text-white hover:text-gray-900"/>
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* separator - Hidden on small screens */}
          <span className="hidden sm:block h-8 w-0.5 bg-slate-700 dark:bg-gray-200"></span>

          {/* Bouton de basculement du mode sombre */}
          <button onClick={() => { console.log('Header: theme toggle clicked'); onThemeToggle(); }} aria-pressed={isDark ? true : false} aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'} className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {/* Show icon based on prop if provided, fallback to CSS-based visibility */}
            {typeof isDark !== 'undefined' ? (
              isDark ? <Moon className="w-5 h-5"/> : <Sun className="w-5 h-5"/>
            ) : (
              <>
                <Sun className="w-5 h-5 dark:hidden"/>
                <Moon className="w-5 h-5 hidden dark:block"/>
              </>
            )}
          </button>

          {/* User Menu */}
          <UserMenu 
            onSettingsClick={onSettingsClick}
            onLogoutClick={() => setShowLogoutModal(true)}
          />
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </header>
  )
}

export default Header
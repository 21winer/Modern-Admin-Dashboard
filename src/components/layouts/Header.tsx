import { SearchNormal1 } from "iconsax-reactjs"
import { BellDot, Filter, Mail, Menu, Moon, Sun } from "lucide-react"

function Header({ onMenuClick, onThemeToggle, isDark, id = 0 }: { onMenuClick: () => void, onThemeToggle: () => void, isDark?: boolean, id?: number }) {
  return (
    <header className='bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-xl border-b border-gray-200 px-6 py-3'>
      <div className='flex items-center justify-between'>
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <button onClick={onMenuClick} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5"/>
          </button>
          <div className="hidden md:block px-4">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">
              Tableau de bord
            </h1>
            <p className="text-slate-800 dark:text-white text-md">Bienvenue, Win! voici le rendu d'aujourd'hui</p>
          </div>
        </div>
        {/* Search bar */}
        <div className='flex-1 max-w-md mr-6'>
          <div className="relative w-full">
            <button className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-900/80 dark:text-slate-100/70 hover:text-slate-900/80 dark:hover:text-slate-100">
              <SearchNormal1 size={18} variant="Linear"/>
            </button>
            <input
              type="text"
              placeholder='Recherche ...'
              className='w-full pl-9 pr-9 py-2 border border-slate-900/80 dark:border-slate-100/90 rounded-full focus:outline-none focus:ring-purple-500 text-slate-900/80 dark:text-slate-100/90 transition-all'
            />

            {/* Filter */}
            <button className="absolute right-0 p-3 transform-transition-y text-slate-900/80 dark:text-slate-100/70 hover:text-slate-900/80 dark:hover:text-slate-100">
              <Filter className="w-5 h-5"/>
            </button>
          </div>
        </div>

        {/* User actions */}
        <div className='flex items-center space-x-4'>

          {/* Message */}
          <button className='p-2 bg-slate-200/80 dark:bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-400 rounded-full'>
            <Mail className="w-5 h-5 dark:hover:text-white hover:text-gray-900"/>
          </button>

          {/* Notifications */}
          <button className='p-2 bg-slate-200/80 dark:bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray rounded-full'>
            <BellDot className="w-5 h-5 dark:hover:text-white hover:text-gray-900"/>
            <span className="absolute top-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* separator */}
          <span className="h-8 w-0.5 bg-slate-700 dark:bg-gray-200"></span>

          {/* User profile */}
          <div className='flex items-center space-x-2 '>
            <div className='w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center'>
              <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
              "abalo" + id
            }`}
            className="size-full object-contain rounded-full"
          />
            </div>
            <span className='text-sm font-normal text-gray-800 dark:text-gray-200'>Admin</span>
          </div>

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
        </div>
      </div>
    </header>
  )
}

export default Header
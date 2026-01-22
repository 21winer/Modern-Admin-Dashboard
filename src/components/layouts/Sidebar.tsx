import { BarChart3, Calendar1, ChevronDown, CreditCard, FileText, LayoutDashboard, LogOut, LucideShoppingBag, MessageSquare, Package, Settings, Sparkle, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

// Definition des types pour les menuItems
interface SubMenuItem {
  id: string,
  label: string
}

export interface MenuItem {
  id: string
  icon: LucideIcon
  label: string
  active?: boolean
  badge?: string
  submenu?: SubMenuItem[]
  count?: string
}
export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Tableau de bord",
    badge: "New"
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytiques",
    submenu: [
      { id: "overview", label: "Aperçu" },
      { id: "report", label: "Rapport" },
      { id: "insights", label: "Perspectives" }
    ]
  },
  {
    id: "users",
    icon: Users,
    label: "Utilisateurs",
    submenu: [
      { id: "all-users", label: "Tous les utilisateurs" },
      { id: "roles", label: "Rôles et Permissions" },
      { id: "activity", label: "Activité de l'utilisateur" }
    ]
  },
  {
    id: 'ecommerce',
    icon: LucideShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Produits" },
      { id: "orders", label: "Commandes" },
      { id: "customers", label: "Clients" }
    ]
  },
  {
    id: 'inventory',
    icon: Package,
    label: "Inventaire",
    count: "847"
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions"
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "13"
  },
  {
    id: "calendar",
    icon: Calendar1,
    label: "Calendrier"
  },
  {
    id: "reports",
    icon: FileText,
    label: 'Rapport'
  }
]
function Sidebar({ sidebarCollapse, currentPage, handlePageChange, onSettingsClick, onLogoutClick }: { sidebarCollapse: boolean, currentPage: string, handlePageChange : (id:string)=>void, onSettingsClick: () => void, onLogoutClick: () => void}) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
  const ToggleSubMenu = (id: string) => {
    setOpenSubMenu(openSubMenu === id ? null : id)
  }  
  return (
    <div className={`${sidebarCollapse ? "w-20" : "w-72"} h-screen transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 border-r border-slate-200/50 dark:border-b-slate-700/50 backdrop-blur-xl flex flex-col justify-between relative z-10`}>

      {/* Logo en haut */}
      <div className="p-6 flex items-center space-x-3">
        <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <Sparkle className="w-6 h-6 text-white" />
        </button>
        {!sidebarCollapse && (
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">
            Win-Dashboard
          </h1>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          // Definition de la variable isActive
          const isActive = currentPage === item.id || item.active

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    ToggleSubMenu(item.id);
                  }
                  handlePageChange(item.id);
                }}
                className={`w-full text-sm flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${isActive ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}>
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5 {isActive ? "text-white" : ""}`} />
                  {/* Conditional Rendering */}
                  {!sidebarCollapse && (
                    <>
                      <span className={`font-medium ${isActive ? "text-white" : ""}`}> {item.label} </span>

                      {isActive && item.badge && (
                        <span className="bg-red-600 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && !sidebarCollapse && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-200 rounded-full">{item.count} </span>
                      )}
                    </>

                  )}
                </div>

                {!sidebarCollapse && item.submenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSubMenu === item.id ? "rotate-180" : "rotate-0"}`} />
                )}
              </button>

              {/* Sub Menus */}
              {item.submenu && openSubMenu === item.id && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.id}
                      href="#"
                      className="w-full block text-sm text-slate-900 dark:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200 ease-in-out"
                    >
                      <span className="font-medium">{subItem.label} </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        }
        )}
      </nav>

      {/* Paramètres en bas */}
      <div className="p-5 flex flex-col space-y-2 border-t border-slate-400/50 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-200">
        {!sidebarCollapse && (
          <h2 className="text-slate-600 dark:text-white/45 text-sm">PARAMÈTRES</h2>
        )}
        <div className="flex flex-col">
          <div className="flex p-3 space-x-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl">
            <Settings className="w-5 h-5 text-slate-900 dark:text-white" />
            {!sidebarCollapse && (
              <button className="font-medium text-sm text-slate-900 dark:text-white transition-all duration-200">Paramètre</button>
            )}
          </div>
          <div className="flex space-x-3 p-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200">
            <LogOut className="w-5 h-5 text-amber-700 dark:text-amber-600" />
            {!sidebarCollapse && (
              <button className="font-medium text-sm text-amber-700 dark:text-amber-600">Déconnexion</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Sidebar
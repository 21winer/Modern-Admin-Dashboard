import { Mail, MoreVertical, Crown, Shield, User } from "lucide-react"

interface UserData {
  id: number
  name: string
  email: string
  role: "Admin" | "Moderator" | "User"
  status: "active" | "inactive"
  avatar: string
  joinDate: string
  lastActive: string
}

const users: UserData[] = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    role: "Admin",
    status: "active",
    avatar: "JD",
    joinDate: "12 Jan 2024",
    lastActive: "À l'instant"
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie.martin@example.com",
    role: "Moderator",
    status: "active",
    avatar: "MM",
    joinDate: "15 Jan 2024",
    lastActive: "il y a 5 min"
  },
  {
    id: 3,
    name: "Pierre Bernard",
    email: "pierre.bernard@example.com",
    role: "User",
    status: "active",
    avatar: "PB",
    joinDate: "18 Jan 2024",
    lastActive: "il y a 2h"
  },
  {
    id: 4,
    name: "Sophie Laurent",
    email: "sophie.laurent@example.com",
    role: "User",
    status: "active",
    avatar: "SL",
    joinDate: "20 Jan 2024",
    lastActive: "il y a 1 jour"
  },
  {
    id: 5,
    name: "Lucas Robert",
    email: "lucas.robert@example.com",
    role: "Moderator",
    status: "inactive",
    avatar: "LR",
    joinDate: "22 Jan 2024",
    lastActive: "il y a 3 jours"
  }
]

const getRoleIcon = (role: string) => {
  switch (role) {
    case "Admin":
      return Crown
    case "Moderator":
      return Shield
    default:
      return User
  }
}

const getRoleColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "text-purple-600 bg-purple-100 dark:bg-purple-900/30"
    case "Moderator":
      return "text-blue-600 bg-blue-100 dark:bg-blue-900/30"
    default:
      return "text-slate-600 bg-slate-100 dark:bg-slate-700/30"
  }
}

function UsersTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Liste des Utilisateurs
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Gérez tous vos utilisateurs
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all">
            Ajouter Utilisateur
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Utilisateur
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Rôle
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Date d'inscription
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden xl:table-cell">
                Dernière Activité
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {users.map((user) => {
              const RoleIcon = getRoleIcon(user.role)
              return (
                <tr 
                  key={user.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {user.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1 truncate">
                          <Mail className="w-3 h-3 flex-shrink-0" />
                          <span>{user.email}</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      <RoleIcon className="w-3 h-3" />
                      <span>{user.role}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {user.joinDate}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden xl:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {user.lastActive}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "active"
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500"
                    }`}>
                      {user.status === "active" ? "Actif" : "Inactif"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable

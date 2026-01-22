import { UserPlus, LogIn, UserX, Settings } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Activity {
  id: number
  type: string
  icon: LucideIcon
  user: string
  action: string
  time: string
  color: string
  bgColor: string
}

const recentActivities: Activity[] = [
  {
    id: 1,
    type: "signup",
    icon: UserPlus,
    user: "Sophie Laurent",
    action: "s'est inscrit(e)",
    time: "il y a 2 min",
    color: "text-emerald-600 dark:text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
  },
  {
    id: 2,
    type: "login",
    icon: LogIn,
    user: "Jean Dupont",
    action: "s'est connecté(e)",
    time: "il y a 10 min",
    color: "text-blue-600 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    id: 3,
    type: "update",
    icon: Settings,
    user: "Marie Martin",
    action: "a mis à jour son profil",
    time: "il y a 25 min",
    color: "text-purple-600 dark:text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    id: 4,
    type: "deactivate",
    icon: UserX,
    user: "Lucas Robert",
    action: "a été désactivé(e)",
    time: "il y a 1h",
    color: "text-red-600 dark:text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30"
  },
  {
    id: 5,
    type: "login",
    icon: LogIn,
    user: "Pierre Bernard",
    action: "s'est connecté(e)",
    time: "il y a 2h",
    color: "text-blue-600 dark:text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  }
]

function RecentUsersActivity() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Activité Récente
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Actions récentes des utilisateurs
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800 dark:text-white">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  <span className="text-slate-600 dark:text-slate-400">
                    {activity.action}
                  </span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentUsersActivity

import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"
import { useState } from "react"

interface NotificationOption {
  id: string
  icon: typeof Bell
  title: string
  description: string
  enabled: boolean
}

function NotificationSettings() {
  const [notifications, setNotifications] = useState<NotificationOption[]>([
    {
      id: "email",
      icon: Mail,
      title: "Notifications par Email",
      description: "Recevez des emails pour les événements importants",
      enabled: true
    },
    {
      id: "push",
      icon: Bell,
      title: "Notifications Push",
      description: "Recevez des notifications dans votre navigateur",
      enabled: true
    },
    {
      id: "sms",
      icon: Smartphone,
      title: "Notifications SMS",
      description: "Recevez des SMS pour les alertes critiques",
      enabled: false
    },
    {
      id: "messages",
      icon: MessageSquare,
      title: "Messages internes",
      description: "Notifications pour les nouveaux messages",
      enabled: true
    }
  ])

  const toggleNotification = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
    ))
  }

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Notifications
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Gérez vos préférences de notifications
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => {
          const Icon = notif.icon
          return (
            <div
              key={notif.id}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-white">
                    {notif.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {notif.description}
                  </p>
                </div>
              </div>

              {/* Toggle switch */}
              <button
                onClick={() => toggleNotification(notif.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notif.enabled
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notif.enabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NotificationSettings

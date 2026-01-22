import ProfileSettings from '@/components/settings/ProfileSettings'
import AppearanceSettings from '@/components/settings/AppearanceSettings'
import NotificationSettings from '@/components/settings/NotificationSettings'
import SecuritySettings from '@/components/settings/SecuritySettings'

function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          Paramètres
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Gérez vos préférences et paramètres de compte
        </p>
      </div>

      {/* Settings sections */}
      <ProfileSettings />
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AppearanceSettings />
        <NotificationSettings />
      </div>

      <SecuritySettings />
    </div>
  )
}

export default SettingsPage

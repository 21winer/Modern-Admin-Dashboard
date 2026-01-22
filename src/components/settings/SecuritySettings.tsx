import { Lock, Key, Shield } from "lucide-react"
import { useState } from "react"

function SecuritySettings() {
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: ""
  })

  const handlePasswordChange = () => {
    // Validate and change password
    console.log('Password change requested')
    setShowPasswordForm(false)
    setPasswordData({ current: "", new: "", confirm: "" })
  }

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sécurité
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Gérez la sécurité de votre compte
        </p>
      </div>

      {/* Change password */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-medium text-slate-800 dark:text-white">
                Mot de passe
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Dernière modification il y a 3 mois
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {showPasswordForm ? "Annuler" : "Modifier"}
          </button>
        </div>

        {showPasswordForm && (
          <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <input
              type="password"
              placeholder="Mot de passe actuel"
              value={passwordData.current}
              onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white"
            />
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={passwordData.new}
              onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white"
            />
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={passwordData.confirm}
              onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white"
            />
            <button
              onClick={handlePasswordChange}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all"
            >
              Enregistrer le mot de passe
            </button>
          </div>
        )}
      </div>

      {/* 2FA */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-medium text-slate-800 dark:text-white">
                Authentification à deux facteurs
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sécurité supplémentaire pour votre compte
              </p>
            </div>
          </div>
          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 dark:bg-slate-700">
            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
          </button>
        </div>
      </div>

      {/* Sessions */}
      <div className="mt-6 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Key className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="font-medium text-slate-800 dark:text-white">
                Sessions actives
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                2 appareils connectés
              </p>
            </div>
          </div>
          <button className="px-4 py-2 text-red-600 dark:text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
            Déconnecter tout
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecuritySettings

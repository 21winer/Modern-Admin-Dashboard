import { User, Mail, Camera } from "lucide-react"
import { useState } from "react"
import { useUser } from "@/lib/UserContext"

function ProfileSettings() {
  const { user, updateUser } = useUser()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "Administrateur du système avec 5 ans d'expérience"
  })

  const handleSave = () => {
    updateUser({
      name: formData.name,
      email: formData.email
    })
    setIsEditing(false)
  }

  if (!user) return null

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Informations du Profil
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Gérez vos informations personnelles
          </p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all"
        >
          {isEditing ? "Sauvegarder" : "Modifier"}
        </button>
      </div>

      {/* Avatar */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
              className="w-full h-full object-contain"
              alt={user.name}
            />
          </div>
          {isEditing && (
            <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
              <Camera className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </button>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-white">
            Photo de profil
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            JPG, PNG ou GIF. Max 2MB
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Nom complet</span>
            </div>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={!isEditing}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Adresse email</span>
            </div>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={!isEditing}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Bio
          </label>
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            disabled={!isEditing}
            rows={3}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white disabled:opacity-60 resize-none"
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings

import { Sun, Moon, Monitor } from "lucide-react"
import { useState } from "react"

type ThemeMode = "light" | "dark" | "auto"

function AppearanceSettings() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>("light")

  const themes = [
    {
      id: "light" as ThemeMode,
      name: "Clair",
      icon: Sun,
      description: "Thème clair pour un usage de jour"
    },
    {
      id: "dark" as ThemeMode,
      name: "Sombre",
      icon: Moon,
      description: "Thème sombre pour réduire la fatigue oculaire"
    },
    {
      id: "auto" as ThemeMode,
      name: "Automatique",
      icon: Monitor,
      description: "S'adapte aux préférences du système"
    }
  ]

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Apparence
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Personnalisez l'apparence de votre interface
        </p>
      </div>

      {/* Theme selector */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
          Thème de l'application
        </label>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map((theme) => {
            const Icon = theme.icon
            const isSelected = selectedTheme === theme.id
            
            return (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`p-3 rounded-full ${
                    isSelected
                      ? "bg-purple-100 dark:bg-purple-900/40"
                      : "bg-slate-100 dark:bg-slate-800"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isSelected
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-slate-600 dark:text-slate-400"
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      isSelected
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-slate-700 dark:text-slate-300"
                    }`}>
                      {theme.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Color accent (placeholder) */}
      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
          Couleur d'accent
        </label>
        <div className="flex space-x-3">
          {["blue", "purple", "green", "red", "amber"].map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-full bg-${color}-500 hover:scale-110 transition-transform border-2 border-white dark:border-slate-800 shadow-lg`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppearanceSettings

import { Lightbulb, AlertCircle, CheckCircle, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Insight {
  id: number
  type: "success" | "warning" | "info" | "tip"
  icon: LucideIcon
  title: string
  description: string
  color: string
  bgColor: string
}

const insights: Insight[] = [
  {
    id: 1,
    type: "success",
    icon: CheckCircle,
    title: "Excellente performance",
    description: "Votre taux de conversion a augmenté de 24% ce mois-ci. Continuez sur cette lancée!",
    color: "text-emerald-600 dark:text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
  },
  {
    id: 2,
    type: "warning",
    icon: AlertCircle,
    title: "Attention au taux de rebond",
    description: "La page 'À propos' a un taux de rebond élevé (45.8%). Optimisez le contenu.",
    color: "text-amber-600 dark:text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20"
  },
  {
    id: 3,
    type: "tip",
    icon: Lightbulb,
    title: "Opportunité d'amélioration",
    description: "Le trafic des réseaux sociaux augmente. Investissez dans le marketing social.",
    color: "text-blue-600 dark:text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    id: 4,
    type: "info",
    icon: TrendingUp,
    title: "Tendance positive",
    description: "Les pages Blog ont le meilleur temps moyen (6m 45s). Créez plus de contenu!",
    color: "text-purple-600 dark:text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  }
]

function AnalyticsInsights() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Perspectives & Recommandations
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Analyses intelligentes de vos données
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={`p-4 rounded-xl ${insight.bgColor} border border-slate-200/50 dark:border-slate-700/50 hover:scale-[1.02] transition-all duration-200`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <insight.icon className={`w-5 h-5 ${insight.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-semibold mb-1 ${insight.color}`}>
                    {insight.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnalyticsInsights

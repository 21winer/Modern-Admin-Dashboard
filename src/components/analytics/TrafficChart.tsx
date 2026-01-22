import { Globe, Share2, Search, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface TrafficSource {
  id: number
  source: string
  visitors: string
  percentage: number
  icon: LucideIcon
  color: string
  bgColor: string
}

const trafficSources: TrafficSource[] = [
  {
    id: 1,
    source: "Recherche Organique",
    visitors: "64,328",
    percentage: 44,
    icon: Search,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    id: 2,
    source: "Réseaux Sociaux",
    visitors: "38,542",
    percentage: 26,
    icon: Share2,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    id: 3,
    source: "Trafic Direct",
    visitors: "28,934",
    percentage: 20,
    icon: Globe,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
  },
  {
    id: 4,
    source: "Email Marketing",
    visitors: "14,088",
    percentage: 10,
    icon: Mail,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/30"
  }
]

function TrafficChart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Sources de Trafic
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Répartition des visiteurs par source
            </p>
          </div>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
            Voir Détails
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {trafficSources.map((source) => (
            <div key={source.id} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${source.bgColor}`}>
                    <source.icon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {source.source}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {source.visitors} visiteurs
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-white">
                  {source.percentage}%
                </span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${source.color} rounded-full transition-all duration-500 group-hover:opacity-90`}
                  style={{ width: `${source.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrafficChart

import { MessageSquare, Inbox, Send, Archive, ArrowUpRight, ArrowDownRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface MessageStat {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: LucideIcon
  color: string
  bgColor: string
  textColor: string
}

export const messageStats: MessageStat[] = [
  {
    title: "Messages Reçus",
    value: "1,284",
    change: "+14.2%",
    trend: "up",
    icon: Inbox,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-600"
  },
  {
    title: "Messages Envoyés",
    value: "892",
    change: "+8.5%",
    trend: "up",
    icon: Send,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-600"
  },
  {
    title: "Non Lus",
    value: "47",
    change: "-12.3%",
    trend: "down",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-600"
  },
  {
    title: "Archivés",
    value: "2,341",
    change: "+22.7%",
    trend: "up",
    icon: Archive,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-600"
  }
]

function MessagesStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {messageStats.map((item, index) => (
        <div 
          key={index} 
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                {item.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {item.value}
              </p>
              <div className="flex items-center space-x-2">
                {item.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${item.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                  {item.change}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs last month
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-full ${item.bgColor} group-hover:scale-110 transition-all duration-200 self-start`}>
              <item.icon className={`w-6 h-6 ${item.textColor}`} />
            </div>
          </div>
          <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-300`}
              style={{ width: item.trend === "up" ? "75%" : "45%" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessagesStatsGrid

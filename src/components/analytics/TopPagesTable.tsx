import { ExternalLink, TrendingUp, TrendingDown } from "lucide-react"

interface PageData {
  id: number
  page: string
  path: string
  views: string
  avgTime: string
  bounceRate: string
  trend: "up" | "down"
  change: string
}

const topPages: PageData[] = [
  {
    id: 1,
    page: "Page d'accueil",
    path: "/",
    views: "124,328",
    avgTime: "3m 24s",
    bounceRate: "32.4%",
    trend: "up",
    change: "+12.5%"
  },
  {
    id: 2,
    page: "Produits",
    path: "/products",
    views: "89,542",
    avgTime: "5m 12s",
    bounceRate: "28.1%",
    trend: "up",
    change: "+8.3%"
  },
  {
    id: 3,
    page: "Blog",
    path: "/blog",
    views: "67,234",
    avgTime: "6m 45s",
    bounceRate: "24.5%",
    trend: "up",
    change: "+15.2%"
  },
  {
    id: 4,
    page: "À propos",
    path: "/about",
    views: "45,892",
    avgTime: "2m 18s",
    bounceRate: "45.8%",
    trend: "down",
    change: "-3.4%"
  },
  {
    id: 5,
    page: "Contact",
    path: "/contact",
    views: "32,147",
    avgTime: "1m 52s",
    bounceRate: "38.2%",
    trend: "up",
    change: "+5.7%"
  }
]

function TopPagesTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Pages Populaires
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Top 5 des pages les plus visitées
            </p>
          </div>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
            Voir Tout
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Page
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Vues
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Temps Moy.
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden xl:table-cell">
                Taux de Rebond
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Tendance
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {topPages.map((page) => (
              <tr 
                key={page.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">
                        {page.page}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                        <span>{page.path}</span>
                        <ExternalLink className="w-3 h-3" />
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-sm font-medium text-slate-800 dark:text-white">
                    {page.views}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {page.avgTime}
                  </span>
                </td>
                <td className="px-6 py-4 hidden xl:table-cell">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {page.bounceRate}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {page.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${page.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                      {page.change}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopPagesTable

import { Download, FileText, Eye } from "lucide-react"

interface Report {
  id: number
  name: string
  type: "Ventes" | "Utilisateurs" | "Inventaire" | "Financier"
  generatedBy: string
  date: string
  size: string
  downloads: number
}

const reports: Report[] = [
  {
    id: 1,
    name: "Rapport Mensuel Janvier 2024",
    type: "Ventes",
    generatedBy: "Jean Dupont",
    date: "22 Jan 2024",
    size: "2.4 MB",
    downloads: 47
  },
  {
    id: 2,
    name: "Analyse des Utilisateurs Q1",
    type: "Utilisateurs",
    generatedBy: "Marie Martin",
    date: "20 Jan 2024",
    size: "1.8 MB",
    downloads: 32
  },
  {
    id: 3,
    name: "État de l'Inventaire",
    type: "Inventaire",
    generatedBy: "Pierre Bernard",
    date: "18 Jan 2024",
    size: "3.1 MB",
    downloads: 28
  },
  {
    id: 4,
    name: "Bilan Financier Annuel 2023",
    type: "Financier",
    generatedBy: "Sophie Laurent",
    date: "15 Jan 2024",
    size: "5.7 MB",
    downloads: 156
  },
  {
    id: 5,
    name: "Performances Produits",
    type: "Ventes",
    generatedBy: "Lucas Robert",
    date: "12 Jan 2024",
    size: "1.2 MB",
    downloads: 41
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "Ventes":
      return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500"
    case "Utilisateurs":
      return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500"
    case "Inventaire":
      return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-500"
    case "Financier":
      return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
    default:
      return "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-400"
  }
}

function ReportsList() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Rapports Disponibles
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Tous vos rapports générés
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all">
            Générer Rapport
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Nom du Rapport
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Généré Par
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden xl:table-cell">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Taille
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {reports.map((report) => (
              <tr 
                key={report.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                        {report.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {report.downloads} téléchargements
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                    {report.type}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {report.generatedBy}
                  </span>
                </td>
                <td className="px-6 py-4 hidden xl:table-cell">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {report.date}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {report.size}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                    </button>
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

export default ReportsList

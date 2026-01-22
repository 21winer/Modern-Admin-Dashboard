import { AlertCircle } from "lucide-react"

interface InventoryItem {
  id: number
  sku: string
  name: string
  category: string
  stock: number
  minStock: number
  maxStock: number
  status: "low" | "medium" | "high"
}

const inventoryItems: InventoryItem[] = [
  {
    id: 1,
    sku: "SKU-1001",
    name: "Laptop Pro 15\"",
    category: "Électronique",
    stock: 45,
    minStock: 20,
    maxStock: 100,
    status: "medium"
  },
  {
    id: 2,
    sku: "SKU-1002",
    name: "Casque Sans Fil",
    category: "Audio",
    stock: 128,
    minStock: 50,
    maxStock: 200,
    status: "high"
  },
  {
    id: 3,
    sku: "SKU-1003",
    name: "Souris Ergonomique",
    category: "Accessoires",
    stock: 234,
    minStock: 100,
    maxStock: 300,
    status: "high"
  },
  {
    id: 4,
    sku: "SKU-1004",
    name: "Clavier Mécanique",
    category: "Accessoires",
    stock: 15,
    minStock: 30,
    maxStock: 150,
    status: "low"
  },
  {
    id: 5,
    sku: "SKU-1005",
    name: "Webcam HD",
    category: "Électronique",
    stock: 89,
    minStock: 40,
    maxStock: 120,
    status: "medium"
  }
]

const getStockStatus = (status: string) => {
  switch (status) {
    case "high":
      return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500"
    case "medium":
      return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
    case "low":
      return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500"
    default:
      return "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-400"
  }
}

function InventoryTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Inventaire
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              État actuel du stock
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all">
            Ajouter Article
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Produit
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Catégorie
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Progression
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {inventoryItems.map((item) => {
              const stockPercentage = ((item.stock - item.minStock) / (item.maxStock - item.minStock)) * 100
              return (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {item.sku}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {item.status === "low" && (
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      )}
                      <span className="text-sm font-semibold text-slate-800 dark:text-white">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${item.status === "low" ? "text-red-600 dark:text-red-500" : "text-slate-800 dark:text-white"}`}>
                      {item.stock} / {item.maxStock}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="w-full max-w-xs">
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            item.status === "high" 
                              ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                              : item.status === "medium"
                              ? "bg-gradient-to-r from-amber-500 to-orange-600"
                              : "bg-gradient-to-r from-red-500 to-rose-600"
                          }`}
                          style={{ width: `${Math.max(0, Math.min(100, stockPercentage))}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStockStatus(item.status)}`}>
                      {item.status === "high" ? "Bon" : item.status === "medium" ? "Moyen" : "Faible"}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InventoryTable

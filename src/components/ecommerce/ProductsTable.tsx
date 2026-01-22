import { MoreVertical, TrendingUp, TrendingDown } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: string
  stock: number
  sold: number
  revenue: string
  trend: "up" | "down"
  change: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Pro 15\"",
    category: "Électronique",
    price: "€1,299",
    stock: 45,
    sold: 234,
    revenue: "€303,966",
    trend: "up",
    change: "+24%"
  },
  {
    id: 2,
    name: "Casque Sans Fil",
    category: "Audio",
    price: "€199",
    stock: 128,
    sold: 567,
    revenue: "€112,833",
    trend: "up",
    change: "+18%"
  },
  {
    id: 3,
    name: "Souris Ergonomique",
    category: "Accessoires",
    price: "€49",
    stock: 234,
    sold: 892,
    revenue: "€43,708",
    trend: "up",
    change: "+12%"
  },
  {
    id: 4,
    name: "Clavier Mécanique",
    category: "Accessoires",
    price: "€149",
    stock: 67,
    sold: 345,
    revenue: "€51,405",
    trend: "down",
    change: "-5%"
  },
  {
    id: 5,
    name: "Webcam HD",
    category: "Électronique",
    price: "€89",
    stock: 89,
    sold: 456,
    revenue: "€40,584",
    trend: "up",
    change: "+8%"
  }
]

function ProductsTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Produits Populaires
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Top 5 des produits les plus vendus
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all">
            Voir Catalogue
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Produit
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Prix
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Vendus
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden xl:table-cell">
                Revenu
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Tendance
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {products.map((product) => (
              <tr 
                key={product.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {product.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {product.category}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-sm font-medium text-slate-800 dark:text-white">
                    {product.price}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className={`text-sm ${product.stock < 50 ? "text-red-600 dark:text-red-500 font-medium" : "text-slate-600 dark:text-slate-400"}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {product.sold}
                  </span>
                </td>
                <td className="px-6 py-4 hidden xl:table-cell">
                  <span className="text-sm font-medium text-slate-800 dark:text-white">
                    {product.revenue}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {product.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                      {product.change}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductsTable

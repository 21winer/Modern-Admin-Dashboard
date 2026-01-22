import { Package, Clock, CheckCircle, XCircle } from "lucide-react"

interface Order {
  id: number
  orderNumber: string
  customer: string
  product: string
  amount: string
  status: "pending" | "processing" | "completed" | "cancelled"
  date: string
}

const orders: Order[] = [
  {
    id: 1,
    orderNumber: "#ORD-3842",
    customer: "Jean Dupont",
    product: "Laptop Pro 15\"",
    amount: "€1,299",
    status: "completed",
    date: "22 Jan 2024"
  },
  {
    id: 2,
    orderNumber: "#ORD-3841",
    customer: "Marie Martin",
    product: "Casque Sans Fil",
    amount: "€199",
    status: "processing",
    date: "22 Jan 2024"
  },
  {
    id: 3,
    orderNumber: "#ORD-3840",
    customer: "Pierre Bernard",
    product: "Souris Ergonomique",
    amount: "€49",
    status: "pending",
    date: "21 Jan 2024"
  },
  {
    id: 4,
    orderNumber: "#ORD-3839",
    customer: "Sophie Laurent",
    product: "Clavier Mécanique",
    amount: "€149",
    status: "completed",
    date: "21 Jan 2024"
  },
  {
    id: 5,
    orderNumber: "#ORD-3838",
    customer: "Lucas Robert",
    product: "Webcam HD",
    amount: "€89",
    status: "cancelled",
    date: "20 Jan 2024"
  }
]

const getStatusConfig = (status: string) => {
  switch (status) {
    case "completed":
      return {
        label: "Complétée",
        icon: CheckCircle,
        className: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500"
      }
    case "processing":
      return {
        label: "En cours",
        icon: Package,
        className: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500"
      }
    case "pending":
      return {
        label: "En attente",
        icon: Clock,
        className: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
      }
    case "cancelled":
      return {
        label: "Annulée",
        icon: XCircle,
        className: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500"
      }
    default:
      return {
        label: status,
        icon: Clock,
        className: "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-400"
      }
  }
}

function OrdersTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Commandes Récentes
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Dernières commandes client
            </p>
          </div>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
            Voir Toutes
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Commande
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Client
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Produit
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden xl:table-cell">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Montant
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {orders.map((order) => {
              const statusConfig = getStatusConfig(order.status)
              const StatusIcon = statusConfig.icon
              return (
                <tr 
                  key={order.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">
                      {order.orderNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {order.customer}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {order.product}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden xl:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {order.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {order.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.className}`}>
                      <StatusIcon className="w-3 h-3" />
                      <span>{statusConfig.label}</span>
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

export default OrdersTable

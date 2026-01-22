import { CheckCircle, XCircle, Clock } from "lucide-react"

interface Transaction {
  id: number
  transactionId: string
  customer: string
  amount: string
  method: "Carte" | "PayPal" | "Virement" | "Crypto"
  status: "success" | "failed" | "pending"
  date: string
  time: string
}

const transactions: Transaction[] = [
  {
    id: 1,
    transactionId: "TXN-8492",
    customer: "Jean Dupont",
    amount: "€1,299.00",
    method: "Carte",
    status: "success",
    date: "22 Jan 2024",
    time: "14:32"
  },
  {
    id: 2,
    transactionId: "TXN-8491",
    customer: "Marie Martin",
    amount: "€499.00",
    method: "PayPal",
    status: "success",
    date: "22 Jan 2024",
    time: "12:18"
  },
  {
    id: 3,
    transactionId: "TXN-8490",
    customer: "Pierre Bernard",
    amount: "€149.00",
    method: "Carte",
    status: "pending",
    date: "22 Jan 2024",
    time: "10:45"
  },
  {
    id: 4,
    transactionId: "TXN-8489",
    customer: "Sophie Laurent",
    amount: "€89.00",
    method: "Virement",
    status: "success",
    date: "21 Jan 2024",
    time: "16:22"
  },
  {
    id: 5,
    transactionId: "TXN-8488",
    customer: "Lucas Robert",
    amount: "€2,499.00",
    method: "Crypto",
    status: "failed",
    date: "21 Jan 2024",
    time: "14:10"
  }
]

const getStatusConfig = (status: string) => {
  switch (status) {
    case "success":
      return {
        label: "Réussi",
        icon: CheckCircle,
        className: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500"
      }
    case "pending":
      return {
        label: "En attente",
        icon: Clock,
        className: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
      }
    case "failed":
      return {
        label: "Échoué",
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

function TransactionsTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Transactions Récentes
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Historique des paiements
            </p>
          </div>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
            Exporter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden md:table-cell">
                Client
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Montant
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden lg:table-cell">
                Méthode
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden xl:table-cell">
                Date & Heure
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {transactions.map((transaction) => {
              const statusConfig = getStatusConfig(transaction.status)
              const StatusIcon = statusConfig.icon
              return (
                <tr 
                  key={transaction.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">
                      {transaction.transactionId}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {transaction.customer}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {transaction.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden xl:table-cell">
                    <div>
                      <p className="text-sm text-slate-800 dark:text-white">
                        {transaction.date}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {transaction.time}
                      </p>
                    </div>
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

export default TransactionsTable

import TransactionsStatsGrid from '@/components/transactions/TransactionsStatsGrid'
import TransactionsTable from '@/components/transactions/TransactionsTable'

function TransactionsPage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques Transactions */}
      <TransactionsStatsGrid />

      {/* Table des transactions */}
      <TransactionsTable />
    </div>
  )
}

export default TransactionsPage

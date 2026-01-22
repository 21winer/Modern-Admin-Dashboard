import ReportsStatsGrid from '@/components/reports/ReportsStatsGrid'
import ReportsList from '@/components/reports/ReportsList'

function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques Rapports */}
      <ReportsStatsGrid />

      {/* Liste des rapports */}
      <ReportsList />
    </div>
  )
}

export default ReportsPage

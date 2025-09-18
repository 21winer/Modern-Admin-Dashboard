import ActivityFeed from '@/components/dashboard/ActivityFeed'
import ChartSection from '@/components/dashboard/ChartSection'
import StatsGrid from '@/components/dashboard/StatsGrid'
import TableSection from '@/components/dashboard/TableSection'

function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* grille de statistiques */}
      <StatsGrid />
      {/* section du graphique */}
      <ChartSection />
      {/* session table */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <div>
          <ActivityFeed/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

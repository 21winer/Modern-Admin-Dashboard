import AnalyticsStatsGrid from '@/components/analytics/AnalyticsStatsGrid'
import TrafficChart from '@/components/analytics/TrafficChart'
import TopPagesTable from '@/components/analytics/TopPagesTable'
import AnalyticsInsights from '@/components/analytics/AnalyticsInsights'

function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques Analytics */}
      <AnalyticsStatsGrid />

      {/* Graphique de trafic et Insights */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TrafficChart />
        <AnalyticsInsights />
      </div>

      {/* Table des pages populaires */}
      <TopPagesTable />
    </div>
  )
}

export default AnalyticsPage

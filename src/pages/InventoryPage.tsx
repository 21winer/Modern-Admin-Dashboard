import InventoryStatsGrid from '@/components/inventory/InventoryStatsGrid'
import InventoryTable from '@/components/inventory/InventoryTable'

function InventoryPage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques Inventaire */}
      <InventoryStatsGrid />

      {/* Table de l'inventaire */}
      <InventoryTable />
    </div>
  )
}

export default InventoryPage

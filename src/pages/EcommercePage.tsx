import EcommerceStatsGrid from '@/components/ecommerce/EcommerceStatsGrid'
import ProductsTable from '@/components/ecommerce/ProductsTable'
import OrdersTable from '@/components/ecommerce/OrdersTable'

function EcommercePage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques E-commerce */}
      <EcommerceStatsGrid />

      {/* Table des produits */}
      <ProductsTable />

      {/* Table des commandes */}
      <OrdersTable />
    </div>
  )
}

export default EcommercePage

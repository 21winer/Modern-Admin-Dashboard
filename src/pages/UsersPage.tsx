import UsersStatsGrid from '@/components/users/UsersStatsGrid'
import UsersTable from '@/components/users/UsersTable'
import RecentUsersActivity from '@/components/users/RecentUsersActivity'

function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques utilisateurs */}
      <UsersStatsGrid />

      {/* Table des utilisateurs et activité récente */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <UsersTable />
        </div>
        <div>
          <RecentUsersActivity />
        </div>
      </div>
    </div>
  )
}

export default UsersPage

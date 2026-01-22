// main.tsx
import { StrictMode, useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { LoadingSpinner } from '@/components/ui';
import { Header, Sidebar, menuItems } from '@/components/layouts';
import useTheme from '@/lib/useTheme';
import { UserProvider } from '@/lib/UserContext';
import LogoutModal from '@/components/modals/LogoutModal';
import { useAuth } from '@/lib/useAuth';
const Dashboard = lazy(() => import('@/pages/DashboardPage'));
const Analytics = lazy(() => import('@/pages/AnalyticsPage'));
const Users = lazy(() => import('@/pages/UsersPage'));
const Ecommerce = lazy(() => import('@/pages/EcommercePage'));
const Inventory = lazy(() => import('@/pages/InventoryPage'));
const Transactions = lazy(() => import('@/pages/TransactionsPage'));
const Messages = lazy(() => import('@/pages/MessagesPage'));
const Calendar = lazy(() => import('@/pages/CalendarPage'));
const Reports = lazy(() => import('@/pages/ReportsPage'));
const Settings = lazy(() => import('@/pages/SettingsPage'));

function AppLayout() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { logout } = useAuth();
  
  const toggleCollapse = () => {
    setSidebarCollapse(!sidebarCollapse);
  };
  
  const defaultActiveItem = menuItems.find(item => item.active);
  const [currentPage, setCurrentPage] = useState<string>(defaultActiveItem?.id || "dashboard");

  const handlePageChange = (id: string) => {
    setCurrentPage(id);
  };

  const handleSettingsClick = () => {
    setCurrentPage("settings");
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  // Theme handling via hook
  const { isDark, toggle } = useTheme();
  
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Sidebar 
        sidebarCollapse={sidebarCollapse} 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div className="flex flex-col flex-1 min-w-0">
        <Header 
          onMenuClick={toggleCollapse} 
          onThemeToggle={toggle} 
          onSettingsClick={handleSettingsClick}
          isDark={isDark} 
        />
        <main className="flex-1 overflow-y-auto bg-transparent">
            <div className='p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6'>
              {currentPage === "dashboard" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Dashboard />
                </Suspense>
              )}
              {currentPage === "analytics" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Analytics />
                </Suspense>
              )}
              {currentPage === "users" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Users />
                </Suspense>
              )}
              {currentPage === "ecommerce" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Ecommerce />
                </Suspense>
              )}
              {currentPage === "inventory" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Inventory />
                </Suspense>
              )}
              {currentPage === "transactions" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Transactions />
                </Suspense>
              )}
              {currentPage === "messages" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Messages />
                </Suspense>
              )}
              {currentPage === "calendar" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Calendar />
                </Suspense>
              )}
              {currentPage === "reports" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Reports />
                </Suspense>
              )}
              {currentPage === "settings" && (
                <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Settings />
                </Suspense>
              )}
            </div>
        </main>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <AppLayout />
    </UserProvider>
  </StrictMode>,
);
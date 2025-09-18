// main.tsx
import { StrictMode, useState, useEffect, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { LoadingSpinner } from '@/components/ui';
import { Header, Sidebar, menuItems } from '@/components/layouts';
const Dashboard = lazy(() => import('@/pages/DashboardPage'));

function AppLayout() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const toggleCollapse = () => {
    setSidebarCollapse(!sidebarCollapse);
  };
  
  const defaultActiveItem = menuItems.find(item => item.active);
  const [currentPage, setCurrentPage] = useState<string>(defaultActiveItem?.id || "dashboard");

  const handlePageChange = (id: string) => {
    setCurrentPage(id);
  };

  // Correction ici: Initialiser l'état du mode sombre en fonction du thème du système
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Sidebar 
        sidebarCollapse={sidebarCollapse} 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div className="flex flex-col flex-1">
        <Header onMenuClick={toggleCollapse} onThemeToggle={toggleDarkMode} />
        <main className="flex-1 overflow-y-auto bg-transparent">
            <div className='p-6 space-y-6'>
              {currentPage === "dashboard" && (
                  <Suspense fallback={<LoadingSpinner size={36} />}>
                  <Dashboard />
                </Suspense>
              )}
            </div>
        </main>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
);
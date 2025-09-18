// simple theme hook: persists preference to localStorage, falls back to system preference
import { useEffect, useState, useCallback } from 'react';

const THEME_KEY = 'site-theme';

export default function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      const stored = localStorage.getItem(THEME_KEY);
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem(THEME_KEY, 'light');
      }
    } catch (e) {
      // noop
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark(v => !v), []);

  return { isDark, toggle };
}

import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="bg-white/70 dark:bg-[var(--universe)]/30 dark:border-[var(--universe)] dark:hover:bg-[var(--universe)]/50 backdrop-blur-sm"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[var(--planetary)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--sky)]" />
      )}
    </Button>
  );
}

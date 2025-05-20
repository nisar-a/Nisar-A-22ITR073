import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button 
      className={`theme-toggle ${theme}`} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="icon">{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className="text">{theme === 'light' ? 'Dark' : 'Light'}</span>
      <div className="ripple"></div>
    </button>
  );
}

export default ThemeToggle;
'use client';

import { Around } from '@theme-toggles/react';
import '@theme-toggles/react/css/Around.css';
import { useTheme } from 'next-themes';

import { css, cx } from 'styled-system/css';
import { button } from 'styled-system/recipes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Around
      toggle={toggle}
      toggled={theme === 'light'}
      className={cx(
        button({ variant: 'ghost', size: 'sm' }),
        css({
          fontSize: 'xl',
          px: '0',
        }),
      )}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
}

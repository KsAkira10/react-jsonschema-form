import { ColorScheme, ThemeContextProvider } from '@telefonica/mistica';
import React from 'react';

import { AVAILABLE_THEMES } from './utils/skins';

export const __createMisticaFrameProvider =
  ({
    children,
    skin = 'Vivo_New',
    colorScheme = 'auto',
  }: React.PropsWithChildren<{ skin?: string | null; colorScheme?: ColorScheme | null }>) =>
  () => {
    return (
      <ThemeContextProvider theme={{ ...AVAILABLE_THEMES[skin as keyof typeof AVAILABLE_THEMES], colorScheme }}>
        {children}
      </ThemeContextProvider>
    );
  };

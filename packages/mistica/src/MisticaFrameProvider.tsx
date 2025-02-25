import { ThemeContextProvider } from '@telefonica/mistica';
import React from 'react';

import { AVAILABLE_THEMES } from './utils/skins';

export const __createMisticaFrameProvider =
  ({ children, skin = 'Vivo_New' }: React.PropsWithChildren<{ skin: string }>) =>
  () => {
    return (
      <ThemeContextProvider theme={AVAILABLE_THEMES[skin as keyof typeof AVAILABLE_THEMES]}>
        {children}
      </ThemeContextProvider>
    );
  };

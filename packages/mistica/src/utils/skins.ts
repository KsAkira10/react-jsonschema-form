import {
  getMovistarSkin,
  getO2Skin,
  getO2NewSkin,
  getVivoSkin,
  getVivoNewSkin,
  getTelefonicaSkin,
  getBlauSkin,
  getTuSkin,
  type ThemeConfig,
} from '@telefonica/mistica';

export const Movistar: ThemeConfig = {
  i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
  skin: getMovistarSkin(),
} as const;

export const O2: ThemeConfig = {
  i18n: { locale: 'en-GB', phoneNumberFormattingRegionCode: 'GB' },
  skin: getO2Skin(),
} as const;

export const O2_New: ThemeConfig = {
  i18n: { locale: 'en-GB', phoneNumberFormattingRegionCode: 'GB' },
  skin: getO2NewSkin(),
} as const;

export const Vivo: ThemeConfig = {
  i18n: { locale: 'pt-BR', phoneNumberFormattingRegionCode: 'BR' },
  skin: getVivoSkin(),
} as const;

export const Vivo_New: ThemeConfig = {
  i18n: { locale: 'pt-BR', phoneNumberFormattingRegionCode: 'BR' },
  skin: getVivoNewSkin(),
} as const;

export const Telefonica: ThemeConfig = {
  i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
  skin: getTelefonicaSkin(),
} as const;

export const Blau: ThemeConfig = {
  i18n: { locale: 'de-DE', phoneNumberFormattingRegionCode: 'DE' },
  skin: getBlauSkin(),
} as const;

export const Tu: ThemeConfig = {
  i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
  skin: getTuSkin(),
} as const;

export const AVAILABLE_THEMES = { Movistar, O2, O2_New, Vivo, Vivo_New, Telefonica, Blau, Tu };

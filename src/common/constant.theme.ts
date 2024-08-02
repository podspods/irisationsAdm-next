import { cn } from '@/helpers/helpers.tailwind'

export const borderDarkMode = 'border-neutral-700'
export const borderLigthMode = 'border-neutral-400'
export const hoverDarkMode = 'hover:bg-primary-700'
export const hoverLigthMode = 'hover:bg-primary-300'
export const colorDarkMode = 'text-primary-100 shadow-slate-200/50'
export const colorLigthMode = 'text-primary-900 shadow-slate-800/50'
export const commonClass = 'rounded  shadow-lg';
export const darkMode = cn (colorDarkMode, hoverDarkMode, borderDarkMode);
export const ligthMode = cn (colorLigthMode, hoverLigthMode, borderLigthMode);

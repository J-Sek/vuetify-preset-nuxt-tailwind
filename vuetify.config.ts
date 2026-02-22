import { breakpoints } from './app/theme/breakpoints'
import type { VOptions } from 'vuetify-nuxt-module'

export const vuetifyOptions: VOptions = {
  theme: {
    defaultTheme: 'system',
    utilities: false,
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: breakpoints,
  },
}

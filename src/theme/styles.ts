import { mode } from '@chakra-ui/theme-tools'

export const globalStyles = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    mono: 'Consolas, monospace',
  },
  styles: {
    global: (props: object) => ({
      body: {
        bg: mode('white', 'dark')(props),
      },
      'html, body, #root': {
        minHeight: '100vh',
      },
    }),
  },
}

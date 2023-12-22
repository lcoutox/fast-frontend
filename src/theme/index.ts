import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { config } from './config'
import { components } from './components'
import { globalStyles } from './styles'

const theme = extendTheme(
  {
    ...globalStyles,
    config,
    components,
    colors: {
      primary: {
        100: '#a5e5cd',
        200: '#7fd9b9',
        300: '#59ccA3', // Cor principal ajustada
        400: '#34c18f',
        500: '#0ebb7b',
        600: '#0aa46b',
        700: '#098d5b',
        800: '#07764a',
        900: '#056e3a',
      },

      dark: {
        400: '#38424f',
        500: '#232931',
        600: '#0e1013',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)

export default theme

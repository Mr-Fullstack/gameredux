const fonts = {
  family: {
    default: "'Press Start 2P', cursive"
  },
  weight: {
    regular: '400',
  }
}

export const themelight = {
  colors: {
    primary: '#333333',
    secondary: '#532692',
    success: '#46DC67',
    danger: '#DC4646',
    atttetion: '#DCA046',
    background: '#F9F9F9',
    card_background_active: '#EEEEEE',
    card_border_active: '#EAD9FF',
    card_background_inactive: '#EAD9FF',
    card_border_inactive: '#EAD9FF',
    pause_background:'#F9F9F9',
    pause_background_button_menu:'#EAD9FF',
    pause_border_button_menu:'#532692'
  },
  fonts
}
export const themedark = {
  colors: {
    primary: '#ECDEFF',
    secondary: '#BC9BEB',
    success: '#46DC67',
    danger: '#DC4646',
    atttetion: '#DCA046',
    background: '#1B1229',
    card_background_active: '#281C3A',
    card_border_active: '#120B1D',
    card_background_inactive: '#120B1D',
    card_border_inactive: '#2B203D',
    pause_background:'#2B203D',
    pause_background_button_menu:'#1B1229',
    pause_border_button_menu:'#120B1D'
  },
  fonts
}
export default {
  colors: themelight.colors,
  fonts: themelight.fonts
}
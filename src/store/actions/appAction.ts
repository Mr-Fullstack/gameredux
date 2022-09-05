
import { THEME_DARK, THEME_LIGHT } from '@/consts';
import { themedark, themelight } from '@/theme/theme';

const AppAction = {
  setTheme(theme: 'themedark' | 'themelight') {
    if (theme === 'themedark')
      return {
        type: THEME_DARK,
        payload: { theme: themedark, theme_name: theme }
      }
    else if (theme === 'themelight') {
      return {
        type: THEME_LIGHT,
        payload: { theme: themelight, theme_name: theme }
      }
    } else {
      return {
        type: THEME_LIGHT,
        payload: { theme: themelight, theme_name: theme }
      }
    }
  }
}

export default AppAction;
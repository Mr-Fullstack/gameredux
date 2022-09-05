import { THEME_DARK, THEME_LIGHT } from "@/consts"
import { themelight } from "@/theme/theme"

const INITIAL_STATE = {
  theme: themelight,
  theme_name: 'themelight'
}

export function app(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case THEME_DARK:
    case THEME_LIGHT:
      return { ...state, theme: action.payload.theme, theme_name: action.payload.theme_name }
    default:
      return state
  }
}
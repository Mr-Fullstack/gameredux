import theme from '@/theme/theme';

export interface StateProps {
  game: GameProps;
  appConfig: AppProps;
}

export interface GameProps {
  start_game: boolean;
  pause_game: boolean;
  pauseGame:() => any;
}
export interface AppProps {
  theme: typeof theme,
  theme_name: 'themedark' | 'themelight',
}



import theme from '@/theme/theme';
import { Dispatch } from 'redux';

export interface StateProps {
  game: GameProps;
  appConfig: AppProps;
}

export interface GameProps {
  start_game: boolean;
  pause_game: boolean;
  score: number;
  pauseGame: () => any;
}


export interface AppProps {
  theme: typeof theme,
  theme_name: 'themedark' | 'themelight',
}



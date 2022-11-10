// styled.d.ts
import 'styled-components';

import { mainTheme } from './main';

type mainThemeType = typeof mainTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends mainThemeType {}
}

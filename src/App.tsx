import { mainTheme } from './style/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App" data-testid="test">
        test
      </div>
    </ThemeProvider>
  );
}

export default App;
export { App };

// background-color: #242424;

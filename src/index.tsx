import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import './index.css';

import App from 'App';
import { store } from 'store';
import 'utils/locale';
import { theme } from 'utils/theme';

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
